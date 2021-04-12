import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoBusService } from '../Service/info-bus.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perte',
  templateUrl: './perte.page.html',
  styleUrls: ['./perte.page.scss'],
})
export class PertePage implements OnInit {
  clientForm:FormGroup;
  objetForm:FormGroup;
  clients;
  objets
  constructor(private infoBusService:InfoBusService, private alertController: AlertController) { }
  ngOnInit() {
    this.objetForm = new FormGroup({
      NUMERO_TICKET: new FormControl('', Validators.required),
      LIBELLE_OBJET: new FormControl('', Validators.required),
      Details: new FormControl('', Validators.required),
      DATE_OBJET_PERDU: new FormControl('', Validators.required),
      HEURE: new FormControl('', Validators.required),
    });

    this.clientForm = new FormGroup({
      NUMERO_TICKET: new FormControl('', Validators.required),
      MATRICULE_BUS: new FormControl('', Validators.required),
      PRENOM: new FormControl('', Validators.required),
      NOM: new FormControl('', Validators.required),
      ADRESSE_1: new FormControl('', Validators.required),
      ADRESSE_2: new FormControl('', Validators.required),
      TEL_CLIENT: new FormControl('', Validators.required),
      EMAIL: new FormControl('', Validators.required),
    });
    
  }

  selectSegment: string = 'client';

  segmentChanged(ev: any) {
    console.log(ev.target.value);
    this.selectSegment=ev.target.value;
  }

  async ajoutPerte(){

    let Form = this.objetForm.value;
    let newDate = Form.DATE_OBJET_PERDU +' '+Form.HEURE;
    const formData = new FormData();
    Object.keys(Form).forEach(function (param) {
     if(param!='DATE_OBJET_PERDU'){
      formData.append(param,Form[param]);
     }else{
      formData.append(param,newDate);
     }
    
     })
     formData.append('objet_perdu','');
    /*  const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      
    });

    await alert.present(); */
    this.infoBusService.addobjetPerdu(formData).subscribe((data:any)=>
      {
        this.objets = data;
        console.log(data)
      }  
    ) 
  } 

  ajoutClient(){
   
    let Form = this.clientForm.value;
    const formData = new FormData();
    Object.keys(Form).forEach(function (param) {
       formData.append(param,Form[param]);
     })
    formData.append('AddClient','');
    console.log(Form);
    this.infoBusService.addClient(formData).subscribe((data:any)=>
      {
        this.clients = data;
        console.log(data)
      }  
    ) 
  }  
}
