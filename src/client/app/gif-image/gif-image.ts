import {Component, Input} from 'angular2/core';
import {GifInput} from './../gif-input/gif-input';
import {API} from './../api/api';

@Component({
  selector: 'gif-image',
  templateUrl: 'app//gif-image/gif-image.html',
  styleUrls: ['app//gif-image/gif-image.css'],
  providers: [API],
  directives: [GifInput],
  pipes: []
})
export class GifImage {

  @Input() tag: string = '';
  @Input() hint: string = '';

  private result$;
  private gif;
  private default_image: string = 'http://31.media.tumblr.com/03645735a2fa36394abdcddb2102a364/tumblr_inline_np9hcuZr931qd3uu5_540.gif';

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
      this.hint = `Showing "${this.tag}" gifs...`;
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
