import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [


  {path:"",component:EnquiryComponent},
  {path:"history",component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
