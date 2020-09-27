import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserRegisterModule {
  constructor (
    public first_name:String,
    public last_name:String,
    public email:String,
    public password:String,
    public role:String,
    public image:String,
    public extra:String,
  ){}
}
