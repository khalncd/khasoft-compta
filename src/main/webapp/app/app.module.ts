import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Compta20SharedModule } from 'app/shared/shared.module';
import { Compta20CoreModule } from 'app/core/core.module';
import { Compta20AppRoutingModule } from './app-routing.module';
import { Compta20HomeModule } from './home/home.module';
import { Compta20EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Compta20SharedModule,
    Compta20CoreModule,
    Compta20HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Compta20EntityModule,
    Compta20AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Compta20AppModule {}
