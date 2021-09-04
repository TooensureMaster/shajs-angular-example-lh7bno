import { Component } from '@angular/core';
const shajs = require('sha.js');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  hash = shajs('sha256')
    .update('s$')
    .digest('hex');
}
