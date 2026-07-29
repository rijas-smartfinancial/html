import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareersComponent } from './careers/careers.component';
import { AgentsComponent } from './agents/agents.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'agents', pathMatch: 'full' },
  { path: 'careers', component: CareersComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
