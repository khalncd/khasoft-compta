import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Compta20SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Compta20SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Compta20HomeModule {}
