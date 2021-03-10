import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
import { PhotoService } from '../services/photo.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})
export class ModalPopupPage implements OnInit {
  player : any
  constructor(private modalController:ModalController,private photoService :PhotoService,navParams: NavParams) {
    this.player=navParams.get('player')
   }

  ngOnInit() {
   
  }
  defaultSelectedRadio = "radio_2";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;

  CategorieList:any[]=[{
    name:'My Photo'
    },{
      name:'Imports'
      },
    {
   name:'Other'
   }]

   getCategorie(x){
  
    this.photoService.getCategorie(x)
    this.modalController.dismiss()
}

  closeModal(){
    this.modalController.dismiss();
  }
}
