import { Component, Input, OnInit } from '@angular/core';
import { Video } from '@pushit/api-interfaces';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'pushit-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  @Input() currentVideo!:Video
  vidLink!:SafeResourceUrl
  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    const forIframe=this.currentVideo.link?.replace('watch','embed')
     this.vidLink = this.sanitizer.bypassSecurityTrustResourceUrl(forIframe??'');
  }
}
