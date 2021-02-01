import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  history=[

    {name:"sarath",phonenumber:8281121153,email:"@gmail",message:"dhoni"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
