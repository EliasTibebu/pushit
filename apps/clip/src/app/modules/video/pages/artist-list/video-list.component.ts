import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { generate, Video } from "@pushit/api-interfaces";
@Component({
  selector: "pushit-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"],
})
export class  VideoListComponent implements OnInit {
  videos:Video[]=generate(9)
  currentVideo!:Video
  ngOnInit(): void {
    this.currentVideo=this.videos[0]
  }
}
