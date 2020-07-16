import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletetaskPageRoutingModule } from './deletetask-routing.module';

import { DeletetaskPage } from './deletetask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletetaskPageRoutingModule
  ],
  declarations: [DeletetaskPage]
})
export class DeletetaskPageModule {}
