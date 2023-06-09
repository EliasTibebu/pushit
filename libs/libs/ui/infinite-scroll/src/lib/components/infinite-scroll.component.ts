import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from "@angular/core";

  @Component({
    selector: 'pushit-infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.css'],
  })
export class InfiniteScrollComponent implements OnDestroy,AfterViewInit{
    @Input() options = {};
    @Output() scrolled = new EventEmitter();
    @ViewChild('anchor') anchor!: ElementRef<HTMLElement>;

    private observer: IntersectionObserver=new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    });

    constructor(private host: ElementRef) { }
    ngAfterViewInit() {

      const options = {
        root: this.isHostScrollable() ? this.host.nativeElement : null,
        ...this.options
      };
      this.observer = new IntersectionObserver(([entry]) => {
        entry.isIntersecting && this.scrolled.emit();
      }, options);

      this.observer.observe(this.anchor.nativeElement);
    }

    get element() {
      return this.host.nativeElement;
    }
    private isHostScrollable() {
      const style = window.getComputedStyle(this.element);

      return (
        style.getPropertyValue('overflow') === 'auto' ||
        style.getPropertyValue('overflow-y') === 'scroll'
      );
    }
    ngOnDestroy() {
      this.observer.disconnect();
    }
}
