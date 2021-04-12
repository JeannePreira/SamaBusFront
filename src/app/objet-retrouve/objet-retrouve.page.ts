import { Component, OnInit } from '@angular/core';
import { InfoBusService } from '../Service/info-bus.service';

@Component({
  selector: 'app-objet-retrouve',
  templateUrl: './objet-retrouve.page.html',
  styleUrls: ['./objet-retrouve.page.scss'],
})
export class ObjetRetrouvePage implements OnInit {

  itineraires:any;
  ici;
  constructor(private infoBusService:InfoBusService) { }

  ngOnInit() {
    this.infoBusService.getObjetPerdu().subscribe((data:any)=>
      {
        this.itineraires = data;
        console.log(data)
      }  
    )
  }

}
