import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AwardsComponent } from './awards/awards.component';
import { ExploreRolesComponent } from './explore-roles/explore-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AwardsComponent,
    ExploreRolesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
