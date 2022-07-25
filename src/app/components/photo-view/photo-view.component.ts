import { Component, Input, OnInit } from '@angular/core';
import { IPhotho } from 'src/app/interfaces/IPhoto';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss']
})
export class PhotoViewComponent implements OnInit {
  @Input() photoInfo:IPhotho|any = {}
  
  constructor() { }

  ngOnInit(): void {
  }

}
