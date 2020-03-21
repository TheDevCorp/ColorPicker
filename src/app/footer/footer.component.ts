import { Component, OnInit } from '@angular/core';

import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faHeart = faHeart
  faCode = faCode

  constructor() { }

  ngOnInit() {
  }

}
