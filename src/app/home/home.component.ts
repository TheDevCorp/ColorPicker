import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colors_data: any
  snack: boolean

  constructor(private _clipboardService: ClipboardService) {
    this.snack = false
    this.colors_data = [{ 
      data: [{ hex: '#3498DB', show_details: false },
             { hex: '#2475B0', show_details: false },
             { hex: '#74B9FF', show_details: false },
             { hex: '#0A79DF', show_details: false },
             { hex: '#4834DF', show_details: false },
             { hex: '#30336B', show_details: false },
             { hex: '#487EB0', show_details: false },
             { hex: '#192A56', show_details: false },
             { hex: '#6A89CC', show_details: false },
             { hex: '#0A3D62', show_details: false },
             { hex: '#4BCFFA', show_details: false },
             { hex: '#0ABDE3', show_details: false },
             { hex: '#25CCF7', show_details: false },
             { hex: '#67E6DC', show_details: false },
             { hex: '#3C40C6', show_details: false }],
      name: 'Blue'
    },{ 
        data: [{ hex: '#7B8788', show_details: false },
              { hex: '#99AAAB', show_details: false },
              { hex: '#2C3335', show_details: false },
              { hex: '#616C6F', show_details: false },
              { hex: '#DAE0E2', show_details: false },
              { hex: '#535C68', show_details: false },
              { hex: '#333945', show_details: false },
              { hex: '#2F363F', show_details: false },
              { hex: '#586776', show_details: false },
              { hex: '#8395A7', show_details: false },
              { hex: '#A4B0BD', show_details: false },
              { hex: '#777E8B', show_details: false },
              { hex: '#758AA2', show_details: false },
              { hex: '#47535E', show_details: false },
              { hex: '#4C4B4B', show_details: false }],
        name: 'Grey'
      },{ 
        data: [{ hex: '#EEC213', show_details: false },
               { hex: '#F5C469', show_details: false },
               { hex: '#F4C724', show_details: false },
               { hex: '#F0DF87', show_details: false },
               { hex: '#DFAF2B', show_details: false },
               { hex: '#FAC42F', show_details: false },
               { hex: '#F3B63A', show_details: false },
               { hex: '#FBD28B', show_details: false },
               { hex: '#F3B431', show_details: false },
               { hex: '#FAD02E', show_details: false },
               { hex: '#E5B143', show_details: false },
               { hex: '#F3CC79', show_details: false },
               { hex: '#F9DDA4', show_details: false },
               { hex: '#FFF222', show_details: false },
               { hex: '#E1DA00', show_details: false }],
        name: 'Yellow'
      },{ 
        data: [{ hex: '#2ecc72', show_details: false },
               { hex: '#26ae60', show_details: false },
               { hex: '#6ab04c', show_details: false },
               { hex: '#6AB04A', show_details: false },
               { hex: '#badc57', show_details: false },
               { hex: '#43BE31', show_details: false },
               { hex: '#45CE30', show_details: false },
               { hex: '#10A881', show_details: false },
               { hex: '#1BCA9B', show_details: false },
               { hex: '#7CEC9F', show_details: false },
               { hex: '#019031', show_details: false },
               { hex: '#A3CB37', show_details: false },
               { hex: '#75DA8B', show_details: false },
               { hex: '#53E0BC', show_details: false },
               { hex: '#218F76', show_details: false }],
        name: 'Green'
      },{ 
        data: [{ hex: '#E44236', show_details: false },
               { hex: '#B83227', show_details: false },
               { hex: '#D63031', show_details: false },
               { hex: '#E84342', show_details: false },
               { hex: '#FF3031', show_details: false },
               { hex: '#BA2F16', show_details: false },
               { hex: '#EC4849', show_details: false },
               { hex: '#FF3E4D', show_details: false },
               { hex: '#E71C23', show_details: false },
               { hex: '#EA425C', show_details: false },
               { hex: '#E8290B', show_details: false },
               { hex: '#AE1438', show_details: false },
               { hex: '#E83350', show_details: false },
               { hex: '#FF4848', show_details: false },
               { hex: '#FF362E', show_details: false }],
        name: 'Red'
      },{ 
        data: [{ hex: '#EAF0F1', show_details: false },
               { hex: '#E74292', show_details: false },
               { hex: '#01CBC6', show_details: false },
               { hex: '#BB2CD9', show_details: false },
               { hex: '#8B78E6', show_details: false },
               { hex: '#00CCCD', show_details: false },
               { hex: '#1287A5', show_details: false },
               { hex: '#EA7773', show_details: false },
               { hex: '#2B2B52', show_details: false },
               { hex: '#F5BCBA', show_details: false }],
        name: 'Misc'
      }
    ]
  }

  rgb(hex: string) {
    let r = parseInt(hex[1] + hex[2], 16)
    let g = parseInt(hex[3] + hex[4], 16)
    let b = parseInt(hex[5] + hex[6], 16)
    return `${r}, ${g}, ${b}`
  }

  reset(index) {
    this.colors_data[index].data.map(x => x.show_details = false)
  }

  flip(index1, index2) {
    this.colors_data[index1].data[index2].show_details = true
  }

  showSnack(){
    this.snack = true
    setTimeout(() => {this.snack = false}, 3000)
  }

  copy(str) {
    this._clipboardService.copyFromContent(str)
    this.showSnack()
  }

  ngOnInit() {
  }

}
