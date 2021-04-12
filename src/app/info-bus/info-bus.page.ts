import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoBusService } from '../Service/info-bus.service';

@Component({
  selector: 'app-info-bus',
  templateUrl: './info-bus.page.html',
  styleUrls: ['./info-bus.page.scss'],
})
export class InfoBusPage implements OnInit {
  bus:any;
  lieu:string;
  constructor(private infoBusService:InfoBusService) { }
  busForm = new FormGroup({
    lieu: new FormControl('', Validators.required),
    quartier: new FormControl('', Validators.required),
  });
  ngOnInit() {
  }

  getInfos(){
    const info= new FormData;
    info.append('lieu', this.busForm.value.lieu);
    info.append('quartier', this.busForm.value.quartier);
    info.append('searchBus','');
    this.infoBusService.getInfos(info).subscribe(data => {
        this.bus = data;
        console.log(data)
      } 
      ,(error)=>console.log(error)
      
    )

  }
}
