import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ModifyDirectiveDirective } from './modify-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    UserComponent,
    AdminComponent,
    ModifyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
