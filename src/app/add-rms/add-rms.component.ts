import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {RmsService} from "../rms.service";
@Component({
  selector: 'app-add-rms',
  templateUrl: './add-rms.component.html',
  styleUrls: ['./add-rms.component.css']
})
export class AddRmsComponent implements OnInit {

  alert:boolean=false

  addRms = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private rms:RmsService) { }

  ngOnInit(): void {
  }

  collectRms(){
    //console.warn(this.addRms.value)

    this.rms.saveRms(this.addRms.value).subscribe((result)=>{
      this.alert=true
      this.addRms.reset({})
    })
    
  }
  closeAlert()
  {
    this.alert=false
  }


}
