import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
  if (this.username != '' || this.password != '') {
    this.loginService.auth(this.username, this.password).subscribe(response => {
      const token = response.token
      if(!response.token){
        alert('Sign in with your account')
      }else{
        localStorage.setItem('token', token)
        this.router.navigate(['/devices'])
      }



    })
  }else{
    alert('Fill the Required fields')
  }
 }


}
