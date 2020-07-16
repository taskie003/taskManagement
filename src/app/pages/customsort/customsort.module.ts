import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { CustomsortPageRoutingModule } from './customsort-routing.module';

import { CustomsortPage } from './customsort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomsortPageRoutingModule,
     SuperTabsModule,
  ],
  declarations: [CustomsortPage]
})
export class CustomsortPageModule {}
