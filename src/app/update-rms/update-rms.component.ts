import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {RmsService} from '../rms.service'
@Component({
  selector: 'app-update-rms',
  templateUrl: './update-rms.component.html',
  styleUrls: ['./update-rms.component.css']
})
export class UpdateRmsComponent implements OnInit {
alert:boolean=false
  editRms = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private router:ActivatedRoute,private rms:RmsService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.rms.getcurrentRms(this.router.snapshot.params.id).subscribe((result)=>{

      this.editRms = new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        email:new FormControl(result['email'])
      })
    })
  }
collection()
{
  console.warn(this.editRms.value)
  this.rms.updateRms(this.router.snapshot.params.id,this.editRms.value).subscribe((result)=>{
    // console.warn(result)

    this.alert=true
  })
}


closeAlert()
{
  this.alert=false
}
}
