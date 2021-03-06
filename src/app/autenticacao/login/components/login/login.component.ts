import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Login} from '../../models/login.model';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          localStorage.token = data.data.token;
          const usuarioData = JSON.parse(
            atob(data.data.token.split('.')[1]));
          console.log(JSON.stringify(usuarioData));
          if (usuarioData.role === 'ROLE_ADMIN') {
            alert('Deve direcionar para a página de admin');
          } else {
            alert('Deve redirecionar para a página de funcionario');
          }
        },
        error => {
          console.log(JSON.stringify(error));
          let msg = 'Tente novamente em instantes.';
          if (error.status === 401) {
            msg = 'Email/senha inválido(s).';
          }
          this.snackBar.open(msg, 'Erro', {duration: 5000});
        }
      );
  }
}
