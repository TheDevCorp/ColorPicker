import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colors_data: any

  constructor() {
    this.colors_data = {
      grey: [
        { hex: '#7B8788', rgb: '123, 135, 136', cmyk: '10%, 1%, 0%, 47%', hsv: '185°, 10%, 53%', hsl: '185°, 5%, 50%', show_details: false },
        { hex: '#99AAAB', rgb: '153, 170, 171', cmyk: '11%, 1%, 0%, 33%', hsv: '186°, 11%, 67%', hsl: '186°, 10%, 63%', show_details: false },
        { hex: '#2C3335', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#616C6F', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#DAE0E2', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#535C68', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#333945', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#2F363F', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#586776', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#8395A7', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#A4B0BD', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#777E8B', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#758AA2', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#47535E', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false },
        { hex: '#4C4B4B', rgb: '', cmyk: '', hsv: '', hsl: '', show_details: false }
      ]
    }
  }

  flip(index, color){
    if(color === 'grey')
      this.colors_data.grey[index].show_details = !this.colors_data.grey[index].show_details
  }

  copy(str){
    console.log(str)
  }

  ngOnInit() {
  }

}
