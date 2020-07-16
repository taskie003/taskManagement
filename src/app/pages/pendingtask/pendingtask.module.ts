import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';

import { PendingtaskPageRoutingModule } from './pendingtask-routing.module';

import { PendingtaskPage } from './pendingtask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingtaskPageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [PendingtaskPage]
})
export class PendingtaskPageModule {}
