import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {LoginModule} from './autenticacao/login/login.module';
import {LoginRoutingModule} from './autenticacao/login/login-routing.module';
import {CadastroPjModule} from './autenticacao/cadastro-pj/cadastro-pj.module';
import {CadastroPjRoutingModule} from './autenticacao/cadastro-pj/cadastro-pj-routing.module';
import {CadastroPfModule} from './autenticacao/cadastro-pf/cadastro-pf.module';
import {CadastroPfRoutingModule} from './autenticacao/cadastro-pf/cadastro-pf-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
