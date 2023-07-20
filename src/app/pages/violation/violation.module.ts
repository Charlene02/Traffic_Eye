import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolationPageRoutingModule } from './violation-routing.module';

import { ViolationPage } from './violation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolationPageRoutingModule
  ],
  declarations: [ViolationPage]
})
export class ViolationPageModule {}
