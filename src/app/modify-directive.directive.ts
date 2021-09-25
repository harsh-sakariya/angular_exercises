import { Directive, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appModifyDirective]'
})
export class ModifyDirectiveDirective implements OnInit{
  @Input('appModifyDirective') modificationObject: {colour: string, text: string};
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('textContent') textContent: string;

  constructor() {
  }

  ngOnInit(){
    this.backgroundColor = this.modificationObject.colour;
    this.textContent = this.modificationObject.text;
  }

}
