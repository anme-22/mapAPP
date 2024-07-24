import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiYW5tZTIyIiwiYSI6ImNseXl1YmY5YTJnbzQyaXE3MTR3N3V1amYifQ.uFQsLLljZ1gCmCKB1V0MiA',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-87.20681, 14.0818], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
