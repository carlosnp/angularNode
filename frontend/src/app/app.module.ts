import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Components
import { RamdomUserComponent } from './test/ramdom-user/ramdom-user.component';

// Services
import { RamdomUserService } from './services/ramdom-user.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { PdfComponent } from './test/pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    RamdomUserComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RamdomUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
