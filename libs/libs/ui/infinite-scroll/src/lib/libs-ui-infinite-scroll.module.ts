import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfiniteScrollComponent} from "./components/infinite-scroll.component";

@NgModule({
  imports: [CommonModule],
  declarations:[InfiniteScrollComponent],
  exports:[InfiniteScrollComponent]
})
export class LibsUiInfiniteScrollModule {}
