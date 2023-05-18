import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShedulePopupComponent } from './shedule-popup/shedule-popup.component';

const routes: Routes = [{path:"",component:ShedulePopupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
