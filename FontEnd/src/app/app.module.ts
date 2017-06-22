import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home.component';
import { AboutComponent } from './Component/about.component';
import { HeaderComponent } from './Component/core/header/header.component';
import { FooterComponent } from './Component/core/footer/footer.component';
import { HttpModule } from '@angular/http';
import { UserComponent } from './Component/user/user.component';
import { PersonComponent } from './Component/person/person.component'
import { UserServices } from './Service/user.service';
import { DataTablesModule } from 'angular-datatables';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Imports for loading & configuring the in-memory web api


@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, HeaderComponent, FooterComponent, UserComponent, PersonComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule, DataTablesModule, Ng2Bs3ModalModule, ReactiveFormsModule, FormsModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
