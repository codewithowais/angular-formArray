import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDrggableGridComponent } from './Components/custom-drggable-grid/custom-drggable-grid.component';

const routes: Routes = [
  {
    path: '',
    component: CustomDrggableGridComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
