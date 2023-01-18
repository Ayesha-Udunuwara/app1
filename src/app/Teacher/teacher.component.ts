import {Component} from "@angular/core";

@Component({
  selector:'app-Teacher',
  template:'<h1>Hello Teacher {{teacherName}}</h1>',
  styles:['h1{color: brown}']
})
export class teacherComponent{
  teacherName ='"Teacher"';

}
