import { LibsUiVideoPlayerModule } from '@pushit/libs/ui/video-player';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoListComponent } from './pages/artist-list/video-list.component';

@NgModule({
  declarations: [VideoListComponent],
  imports: [
    CommonModule,
    VideoRoutingModule,
    LibsUiVideoPlayerModule
  ],
})
export class VideoModule {}
