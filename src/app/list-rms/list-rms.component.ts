import { Component, OnInit } from '@angular/core';
import { RmsService } from '../rms.service'
@Component({
  selector: 'app-list-rms',
  templateUrl: './list-rms.component.html',
  styleUrls: ['./list-rms.component.css']
})
export class ListRmsComponent implements OnInit {

  constructor(private rms: RmsService) { }

  collection:any=[];
  ngOnInit(): void {
    this.rms.getList().subscribe((result) => {
      console.warn(result)
      this.collection = result
    })
  }


  deleteRms(item:any) 
  {
    //this.collection = this.collection.filter((item: { id: any; }) => item.id !== item)

    this.collection.splice(item-1,1)
    this.rms.deleteRms(item).subscribe((result) => {
      console.warn("result", result)
    })

  }



}
