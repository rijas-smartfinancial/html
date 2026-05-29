import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {

  @ViewChild('badgeEl') badgeEl!: ElementRef<HTMLElement>;
  @ViewChild('iframeEl') iframeEl!: ElementRef<HTMLIFrameElement>;

  isPaused       = false;
  contentVisible = false;
  badgeVisible   = false;

  private targetX       = 0;
  private targetY       = 0;
  private rafId: number | null = null;
  private readyHandled  = false;
  private msgHandler    = this.onVimeoMessage.bind(this);

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    window.addEventListener('message', this.msgHandler);
    // Run the lerp loop outside Angular so rAF never triggers change detection
    this.ngZone.runOutsideAngular(() => this.startLerp());
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.msgHandler);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }

  // ── Mouse tracking ──────────────────────────────────────────────────────────

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.targetX = event.clientX - rect.left;
    this.targetY = event.clientY - rect.top;

    if (!this.badgeVisible) {
      this.ngZone.run(() => (this.badgeVisible = true));
    }
  }

  onMouseLeave(): void {
    this.ngZone.run(() => (this.badgeVisible = false));
  }

  // ── Pause / play ────────────────────────────────────────────────────────────

  togglePause(): void {
    const win = this.iframeEl?.nativeElement?.contentWindow;
    if (!win) return;
    const method = this.isPaused ? 'play' : 'pause';
    win.postMessage(JSON.stringify({ method }), 'https://player.vimeo.com');
    this.isPaused = !this.isPaused;
  }

  // ── Lerp loop (runs entirely outside Angular zone) ─────────────────────────

  private startLerp(): void {
    const badge = this.badgeEl.nativeElement;
    let x = 0, y = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      x = lerp(x, this.targetX, 0.08);
      y = lerp(y, this.targetY, 0.08);
      badge.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      this.rafId = requestAnimationFrame(tick);
    };

    this.rafId = requestAnimationFrame(tick);
  }

  // ── Vimeo postMessage API ───────────────────────────────────────────────────

  private onVimeoMessage(event: MessageEvent): void {
    if (event.origin !== 'https://player.vimeo.com') return;
    try {
      const raw  = typeof event.data === 'string' ? event.data : '{}';
      const data = JSON.parse(raw);
      const win  = this.iframeEl?.nativeElement?.contentWindow;

      if (data.event === 'ready' && !this.readyHandled) {
        this.readyHandled = true;
        // Seek to the 00:50 timestamp (beach party scene)
        win?.postMessage(
          JSON.stringify({ method: 'setCurrentTime', value: 50 }),
          'https://player.vimeo.com'
        );
        // Subscribe to play event so we know when video is actually rendering
        win?.postMessage(
          JSON.stringify({ method: 'addEventListener', value: 'play' }),
          'https://player.vimeo.com'
        );
      }

      // Trigger text animation the first time the video plays
      if (data.event === 'play' && !this.contentVisible) {
        this.ngZone.run(() => (this.contentVisible = true));
      }
    } catch { /* malformed message — ignore */ }
  }
}
