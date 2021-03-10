import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {  Photo, PhotoService } from '../services/photo.service';
import {  ModalController } from '@ionic/angular';
import { ModalPopupPage } from '../modal-popup/modal-popup.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  term: string;
  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController,private modalController : ModalController) { }

  addPhotoToGallery() {
    this.OpenModal()
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  CategorieList:any[]=[{
    name:'My Photo'
    },{
      name:'Imports'
      },
    {
   name:'Other'
   }]
  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
    console.log(photo)
}
/*getPhotoByCategorie(x){
  for (let entry of this.photoService.photos) {
 // console.log(JSON.stringify(entry.Categorie))
  console.log(JSON.stringify(x.name=== JSON.stringify(entry.Categorie)))
  
  if(JSON.stringify(x.name) === JSON.stringify(entry.Categorie))
    {    
       console.log(x.name)
    }
  }
}*/
 async OpenModal(){
    const modal = await this.modalController.create({component : ModalPopupPage});
   
    await modal.present()
  }
ClickMyphoto(){
  this.term = "My photo"
}
ClickImports(){
  this.term = "Imports"
}
ClickOthers(){
  this.term = "Other"
}
getAll(){
  this.photoService.loadSaved
  this.term = ""
}
}
