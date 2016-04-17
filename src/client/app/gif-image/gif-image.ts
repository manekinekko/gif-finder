import {Component, Input} from 'angular2/core';
import {GifInput} from './../gif-input/gif-input';
import {API} from './../api/api';

@Component({
  selector: 'gif-image',
  templateUrl: 'app//gif-image/gif-image.html',
  styleUrls: ['app//gif-image/gif-image.css'],
  providers: [API],
  directives: [GifInput]
  pipes: []
})
export class GifImage {

  @Input() tag: string;
  @Input() hint: string;

  constructor(private api: API) {}

  ngAfterViewInit() {
    if(this.tag !== '') {
      this.refresh();
      this.fetch();
    }
  }

  ngOnChanges(record) {
    if(record && record.tag && record.tag.currentValue) {
      this.tag = record.tag.currentValue;
      this.refresh();
      this.fetch();
      this.hint = `Showing "${tag}" gifs...`;
    }
  }

  private refresh() {
    this.result$ = this.api.fetch(this.tag);
  }

  private randomize() {
    this.fetch();
  }

  private fetch() {
    this.result$.subscribe(gif => this.gif = gif);
  }

}
