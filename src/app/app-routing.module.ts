import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicelayerComponent } from './servicelayer/servicelayer.component';

const routes: Routes = [

  {path:"arpan",component:ServicelayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
