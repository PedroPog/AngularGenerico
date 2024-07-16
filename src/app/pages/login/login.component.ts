import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForms!:FormGroup;

  constructor(
    private formb:FormBuilder,
    private service:AuthService
  ){
    this.loginForms = formb.group({
      login:new FormControl("",[Validators.required]),
      senha:new FormControl("",[Validators.required])
    });
  }

  onSubmit(){
    if(this.loginForms.valid){
      console.table(this.loginForms.value);
      var login = this.loginForms.get('login')?.value;
      var senha = this.loginForms.get('senha')?.value;
      this.service.realizarLogin(login,senha).subscribe(
        (success)=>{
          console.table(success);
        },
        (error)=>{
          console.log(error.error.message);
        }
      )
    }else{
      this.loginForms.markAllAsTouched();
    }
  }
}
