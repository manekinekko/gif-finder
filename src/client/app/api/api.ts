import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class API {

  private url: string = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';

  constructor(private http: Http) {}

  fetch(tag: string = 'cat') {
    return this.http.get(`${this.url}${tag}`)
      .map( (res: Response) => <any>res.json().data );
  }

}
