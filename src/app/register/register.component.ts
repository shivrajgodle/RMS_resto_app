import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { RmsService} from '../rms.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false

  register= new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private rms:RmsService) { }

  ngOnInit(): void {
  }
  collection()
  {
    //console.warn(this.register.value)
    this.rms.registerUser(this.register.value).subscribe((result)=>{
      console.warn("result",result)
      this.alert=true
    })
  }
closeAlert()
{
  this.alert=false
}
}
