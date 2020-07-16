import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatetaskPageRoutingModule } from './createtask-routing.module';

import { CreatetaskPage } from './createtask.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatetaskPageRoutingModule,
    CalendarModule,
  ],
  declarations: [CreatetaskPage]
})
export class CreatetaskPageModule {}
