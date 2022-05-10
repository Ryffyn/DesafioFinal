import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'
import  User   from '../../models/User';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.sass']
})
export class SingupComponent implements OnInit {

  username:string = '';
  password:string = '';
  repeatPassword:string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreateSingup(): void {
    let user: User = new User()

    if(this.password === this.repeatPassword)   {
      user.username = this.username
      user.password = this.password

      this.loginService.create(user,'user').subscribe(response => {
          this.router.navigate([ '/login' ])
        })

      }else{
        alert('Different passwords')
      }


    }

}
