import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route:Router){}
  title = 'userEvent';
}
