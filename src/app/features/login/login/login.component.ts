import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../shared/model/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    ButtonModule,
    InputGroupModule ,
    CommonModule,
    InputGroupAddonModule,
    PasswordModule,
    ReactiveFormsModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{

    private fb = inject(FormBuilder);
  
    constructor(
     private router: Router,
     private authService: AuthService
    ){}

    loginForm  = this.fb.group({
      email: [null, Validators.required],
      password:[null,Validators.required]
    });

    

  ngOnInit(): void {
    
  
  }



  async login() {
    try {
     const user: User = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      };

      const result = await this.authService.login(user);

      //this.mensagensService.exibirMensagem('Bem-vindo!');

      this.router.navigate(['']);
    } catch (error) {
     // this.mensagensService.exibirMensagem('Usuário ou senha inválidos', true);
      console.log(error);
    }
  }

   
}
