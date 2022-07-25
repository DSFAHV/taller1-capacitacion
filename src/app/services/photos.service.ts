import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhotho } from '../interfaces/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private _httpClient: HttpClient) { 
  }

  getPhotos():Observable<Array<IPhotho>>{
    return this._httpClient.get<Array<IPhotho>>('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotoById(idPhoto:string):Observable<Array<IPhotho>>{
    return this._httpClient.get<Array<IPhotho>>(`https://jsonplaceholder.typicode.com/photos/${idPhoto}`);
  }
  
}
