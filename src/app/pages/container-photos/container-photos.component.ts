import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { IPhotho } from 'src/app/interfaces/IPhoto';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-container-photos',
  templateUrl: './container-photos.component.html',
  styleUrls: ['./container-photos.component.scss']
})
export class ContainerPhotosComponent implements OnInit {
  public infoPhoto:IPhotho |any = {};

  constructor(private _router:ActivatedRoute, private _photoService: PhotosService) { }

  ngOnInit(): void {
    const idPhoto = this._router.snapshot.params['id'];
    console.log(idPhoto);
    this._photoService.getPhotoById(idPhoto)
      .pipe(
        take(1),
      ).subscribe( (data) => {
        this.infoPhoto = data;
      });
  }

}
