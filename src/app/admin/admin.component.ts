import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  DoCheck, 
  SimpleChanges, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  ViewChild, 
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements 
OnInit,
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy
{
  @Input() user: {firstName: string, familyName: string, countryName: string};
  @ViewChild('showData') userInfo: ElementRef;
  @ContentChild('contentPara',{static: true}) contentPara: ElementRef;

  constructor() {
  }
  
  //run when @Input() modified otherwise not
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  //If ngOnChanges is available then it's run immediately after ngOnChanges else it's run after constructor
  ngOnInit(): void {
    console.log("ngOnInit called");
  }	

  //It's called immediately after ngOnInit and every change after ngOnChanges 
  ngDoCheck(){
    console.log("ngDoCheck called");
  }

  //call after ngDoCheck 
  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    console.log(this.contentPara.nativeElement.textContent);
  }

  //call after ngAfterContentInit
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  //call after ngAfterContentChecked
  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
    console.log(this.userInfo.nativeElement.textContent);
  }

  //call after ngAfterViewInit
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  //call before angular destroy directive
  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }

}
