import { Component ,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsidePopupComponent } from '../inside-popup/inside-popup.component';

@Component({
  selector: 'app-shedule-popup',
  templateUrl: './shedule-popup.component.html',
  styleUrls: ['./shedule-popup.component.css']
})
export class ShedulePopupComponent implements OnInit {

  constructor(private matdialog:MatDialog){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

shedule(){
  this.matdialog.open(InsidePopupComponent,{
    width:"1000.16px",
    height:"430px",
    
  })
}

}
