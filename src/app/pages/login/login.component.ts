import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router){
    this.loginObj = new Login();
  }

  onLogin(){
    const fixedEmail = 'user@example.com';
    const fixedPassword = 'password123';

   //para consumir api-backend
    //this.http.post('',this.loginObj).subscribe((res:any)=>{
      //if(res.result)
        
        if (this.loginObj.EmailId === fixedEmail && this.loginObj.Password === fixedPassword){
        alert("Login Success");
        localStorage.setItem('angular17token', 'fake-jwt-token')
        this.router.navigateByUrl('/dashboard')
      }else{
        alert("Login Failed: Invalid email or password")
      }
  //  })
  
  }
}

export class Login{
  EmailId: string;
  Password: string;

  constructor(){
    this.EmailId = '';
    this.Password = '';
  }
}