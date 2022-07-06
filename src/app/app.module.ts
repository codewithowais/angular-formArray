import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDrggableGridComponent } from './Components/custom-drggable-grid/custom-drggable-grid.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import { CustomCardComponent } from './Components/custom-card/custom-card.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomDrggableGridComponent,
    CustomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
