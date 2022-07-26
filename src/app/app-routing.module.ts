import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDrggableGridComponent } from './Components/custom-drggable-grid/custom-drggable-grid.component';
import { FormArrayExampleComponent } from './Components/form-array-example/form-array-example.component';

const routes: Routes = [
  {
    path: '',
    component: FormArrayExampleComponent,
  },
  // {
  //   path: '',
  //   component: CustomDrggableGridComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
