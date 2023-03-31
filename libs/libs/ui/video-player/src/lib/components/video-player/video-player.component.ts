import { Component, Input} from '@angular/core';
import {Video} from '@pushit/api-interfaces';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'pushit-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  private _currentVideo!:Video;
  @Input()
  set currentVideo(selectedVideo:Video){
    this._currentVideo=selectedVideo;
    this.getSelectedVideoLink();
  }
  selectedVideoLink!:SafeResourceUrl
  constructor(private sanitizer: DomSanitizer){}

  getSelectedVideoLink(){
    const forIframe=this._currentVideo.clipURL?.replace('watch','embed')
    this.selectedVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(forIframe??'');
  }
}
