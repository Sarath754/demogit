import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

enquiryform=this.fb.group({

name:[""],

phoneNumber:[""],

email:[""],

message:[""],


})



  

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }



  sumbit(){

    this.router.navigateByUrl("/history")

   

  }

}
