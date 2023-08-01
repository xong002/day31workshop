import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventorylistComponent } from './components/inventorylist/inventorylist.component';

@NgModule({
  declarations: [
    AppComponent,
    InventorylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
