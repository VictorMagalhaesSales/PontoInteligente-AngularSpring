import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// MINHAS CLASSES
import { LoginModule, LoginRoutingModule,  CadastroPjModule, CadastroPjRoutingModule, CadastroPfModule, CadastroPfRoutingModule } from './autenticacao';
import { FuncionarioModule, FuncionarioRoutingModule } from './funcionario';
import { AdminModule, AdminRoutingModule } from './admin';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CadastroPjModule,
    CadastroPfModule,
    FuncionarioModule,
    AdminModule,

    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,

    LoginRoutingModule,
    CadastroPjRoutingModule,
    CadastroPfRoutingModule,
    FuncionarioRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
