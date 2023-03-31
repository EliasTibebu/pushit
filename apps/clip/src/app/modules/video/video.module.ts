import { LibsUiVideoPlayerModule } from '@pushit/libs/ui/video-player';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoListComponent } from './pages/video-list/video-list.component';
import {LibsUiInfiniteScrollModule} from "@pushit/libs/ui/infinite-scroll";
import {VideoService} from "./services/video.service";
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [VideoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    VideoRoutingModule,
    LibsUiVideoPlayerModule,
    LibsUiInfiniteScrollModule,
  ],
  providers:[VideoService]
})
export class VideoModule {}
