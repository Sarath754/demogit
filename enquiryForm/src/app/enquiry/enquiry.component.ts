import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from '../services/enquiry.service';

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



  

  constructor(private fb:FormBuilder,private router:Router,private EnquiryService:EnquiryService) { 
  }



  ngOnInit(): void {
  }



  sumbit(){

    

    const name=this.enquiryform.value.name;

    const phoneNumber=this.enquiryform.value.phoneNumber;

    const email=this.enquiryform.value.email;

    const message=this.enquiryform.value.message;

    
this.EnquiryService.sumbit(name,phoneNumber,email,message)
   
this.router.navigateByUrl("/history")
  }

}
