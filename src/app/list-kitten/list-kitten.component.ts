import { Component, OnInit } from '@angular/core';
import { KittenCardService } from '../kitten-card.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  constructor(private kittyCard:KittenCardService) { }

  ngOnInit() {
  }

}
