import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username = "";
  password = "";

//   accountDetails:any = {

//     userone: { acno: 1000, name: "ajay", balance: 1000, username: "userone", password: "testuser" },
//     usertwo: { acno: 1001, name: "sajay", balance: 20000, username: "usertwo", password: "testuser1" },
//     userthree: { acno: 1002, name: "vijay", balance: 25000, username: "userthree", password: "testuser2" },


// }

loginForm= this.fb.group({
username:[""],
password:[""]

})
  constructor(private router:Router,private bankService:BankService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onUsernameChange(event: any) {



    this.username = event.target.value

  }

  onPasswordChange(event: any) {

    this.password = event.target.value

  }

  login() {

    const username=this.loginForm.value.username



    const password=this.loginForm.value.password

    const user=this.bankService.authenicateuser(username,password)

    // this.bankService.authenicateuser(this.username,this.password)

    // this.router.navigateByUrl("/home")
  }


  // authenicateuser = (uname:string,pwd:string) => {        //static login===bank.login in html call cheyan vendi
    
  //   let dataset =this.accountDetails;

  //   if (uname in dataset) {
  //       if (dataset[uname].password == pwd) {
  //           alert("login successful")
  //           // window.location.href = "user.html"
  //       }
  //       else {
  //           alert("incorrect password")
  //       }
  //   }
  //   else {
  //       alert("no user exist with provided username")
  //   }

  // }

}
