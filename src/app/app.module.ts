import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShedulePopupComponent } from './shedule-popup/shedule-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { InsidePopupComponent } from './inside-popup/inside-popup.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {CdkStepperModule} from '@angular/cdk/stepper';

MatStepperModule

@NgModule({
  declarations: [
    AppComponent,
    ShedulePopupComponent,
    InsidePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CdkStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
