import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopoverComponent } from './component/popover/popover.component';
// import { CreatetaskPage } from './pages/createtask/createtask.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { CalendarModule } from 'ion2-calendar';
import { ListPage } from './pages/list/list.page';
import { NewlistPage } from './pages/newlist/newlist.page';
import { DeletetaskPage } from './pages/deletetask/deletetask.page';
import { AddcontactPage } from './pages/addcontact/addcontact.page';

@NgModule({
  declarations: [AppComponent,PopoverComponent,ListPage,NewlistPage,DeletetaskPage,AddcontactPage],/*,CreatetaskPage*/
  entryComponents: [PopoverComponent,ListPage,NewlistPage,DeletetaskPage,AddcontactPage],/*,CreatetaskPage*/
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SuperTabsModule.forRoot(),
    CalendarModule,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
