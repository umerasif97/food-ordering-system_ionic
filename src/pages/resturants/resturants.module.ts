import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResturantsPage } from './resturants';

@NgModule({
  declarations: [
    ResturantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResturantsPage),
  ],
})
export class ResturantsPageModule {}
