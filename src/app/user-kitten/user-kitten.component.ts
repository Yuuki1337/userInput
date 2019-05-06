import { Component, OnInit } from '@angular/core';
import { KittenCardService } from '../kitten-card.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {

  constructor(private kittyCard:KittenCardService) { }

  ngOnInit() {
  }

}
