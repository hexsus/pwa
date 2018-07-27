import { Component, OnInit } from '@angular/core';
import Siema from 'siema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa';

  ngOnInit() {
    const siema = new Siema({
      selector: '.siema',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });

    document.querySelector('.prev').addEventListener('click', () => siema.prev());
    document.querySelector('.next').addEventListener('click', () => siema.next());  
  }
}
