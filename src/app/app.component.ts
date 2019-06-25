import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  title = 'MapBoxGLJS-Implementation-Trial-1';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    mapboxgl.accessToken = 'pk.eyJ1IjoibGhhbm5vbiIsImEiOiJjangyNzY3eDIwaGo5M3lvNHMyNGF6OXdqIn0.EWRRFgaAYuxGL-f2JyvUtQ';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-96.796, 32.777], //Longitute then Latitude
    zoom: 13.15       
    });
  }





}
