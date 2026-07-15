import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareersComponent } from './careers/careers.component';
import { AgentsComponent } from './agents/agents.component';

const routes: Routes = [
  { path: '', redirectTo: 'careers', pathMatch: 'full' },
  { path: 'careers', component: CareersComponent },
  { path: 'agents', component: AgentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
