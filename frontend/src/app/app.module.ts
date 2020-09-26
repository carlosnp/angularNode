import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Components
import { RamdomUserComponent } from './test/ramdom-user/ramdom-user.component';

// Services
import { RamdomUserService } from './services/ramdom-user.service';

@NgModule({
  declarations: [
    AppComponent,
    RamdomUserComponent
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
