import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import mapboxgl from 'mapbox-gl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './maps/map.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
