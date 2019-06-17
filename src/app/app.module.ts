import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptComponent } from './components/dept/dept.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DeptDetailComponent } from './components/dept-detail/dept-detail.component';
import { MainComponent } from './components/main/main.component';
import { HttpClient } from 'selenium-webdriver/http';
import { CompanyComponent } from './components/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptComponent,
    PagenotfoundComponent,
    DeptDetailComponent,
    MainComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
