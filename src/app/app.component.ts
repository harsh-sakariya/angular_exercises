import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  strArr: string[] = ['str1', 'str2', 'str3', 'str4', 'str5', 'str6', 'str7', 'str8', 'str9'];

  private stringObsSubscription: Subscription;

  private customRandomStringPrinter = Observable.create(observer => {
    let str = this.strArr[Math.floor(Math.random()*this.strArr.length)];
    setInterval(()=>{
      observer.next(str);
      if(str === this.strArr[3]){
        observer.error(new Error('do not use it'));
      }
      if(str === this.strArr[this.strArr.length-2]){
        observer.complete();
      }
      str = this.strArr[Math.floor(Math.random()*this.strArr.length)];
    }, 1500);
  })

  ngOnInit(){
    this.stringObsSubscription = this.customRandomStringPrinter.subscribe(
      (str) => {
        console.log(str);
      }
    )
  }

  ngOnDestroy(){
    this.stringObsSubscription.unsubscribe();
  }

  
}
