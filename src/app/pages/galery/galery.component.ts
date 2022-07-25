import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IPhotho } from 'src/app/interfaces/IPhoto';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit 
{
  public photos:Array<Array<IPhotho>> =[];

  constructor(private _photosService: PhotosService) { }

  ngOnInit(): void {
    this._photosService.getPhotos().pipe(take(1)).subscribe((res) => {
      this.photos = this.arrayToMatrix(res, 3) as Array<Array<IPhotho>>;
    });
  }

  arrayToMatrix(array:Array<IPhotho>, elementsPerSubArray:number) {
    var matrix: Array<Array<IPhotho>> = [], i, k;
    for (i = 0, k = -1; i < array.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(array[i]);
    }
    return matrix;
}

}
