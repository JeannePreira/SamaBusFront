import { Component, OnInit } from '@angular/core';
import { InfoBusService } from '../Service/info-bus.service';

@Component({
  selector: 'app-itineraire',
  templateUrl: './itineraire.page.html',
  styleUrls: ['./itineraire.page.scss'],
})
export class ItinerairePage implements OnInit {
  itineraires:any;
  ici;
  constructor(private infoBusService:InfoBusService) { }

  ngOnInit() {
    this.infoBusService.getItineraire().subscribe((data:any)=>
      {
        this.itineraires = data;
        console.log(data)
      }, err => {
        console.log(err);
        
      }
    )
  }

}
