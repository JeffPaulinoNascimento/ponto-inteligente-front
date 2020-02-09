import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {LogarComponent} from './components/logar.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginService} from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
