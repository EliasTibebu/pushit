import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerIncepterService } from './services/spinner-incepter.service';
import { LoadingIndicatorService } from './services/spinner-indictor.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SpinnerComponent
  ],
  exports:[SpinnerComponent],
  providers:[
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerIncepterService,
      multi: true,
    },
  ]
})
export class LibsUiSpinnerModule {}
