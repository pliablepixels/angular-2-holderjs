// credit: https://stackoverflow.com/a/46673111/1361529
@Directive({
  selector: '[holderjs]',
})
export class HolderjsDirective {
  constructor(public el: ElementRef) {}

  ngAfterViewInit() {
     Holder.run({images:this.el.nativeElement});
  }
}
