import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoBusService {
 
  constructor(private http:HttpClient) { }
  url ="http://localhost/sama_bus/sama_bus_back/api/bus" 

  getInfos(lieu:any) {
    return this.http.post(`${this.url}`, lieu);
  }

  getItineraire(itineraire="") {
    return this.http.get(`${this.url}?itineraire=${itineraire}`);
  }

  getObjetPerdu(objet="") {
    return this.http.get(`${this.url}?object=${objet}`);
  }
  
  addobjetPerdu(client:any) {
    return this.http.post(`${this.url}`, client);
  }

  addClient(client:any) {
    return this.http.post(`${this.url}`, client);
  }
  
}
