import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptComponent } from './components/dept/dept.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MainComponent } from './components/main/main.component';
import { DeptDetailComponent } from './components/dept-detail/dept-detail.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent,
    children: [
      {path: '', redirectTo: '/main/dept/1', pathMatch: 'full'},
      {path: 'dept', component: DeptComponent},
      {path: 'dept/:id', component: DeptComponent},
      {path: 'dept/more/:id', component: DeptDetailComponent},
      {path: 'comp', component: CompanyComponent},
      {path: 'comp/:id', component: CompanyComponent},
      {path: '**', component: PagenotfoundComponent}
    ]
},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
