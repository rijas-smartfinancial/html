import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareersComponent } from './careers/careers.component';
import { AgentsComponent } from './agents/agents.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './leads/overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'careers', component: CareersComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
