import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms'
import { Validators } from '@angular/forms'
import { KittenCardService } from '../kitten-card.service';
import { Kitten } from '../common/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  public ages:Array<number> = [1,2,3,4,5,6,7]
  public races : Array<string> = ["Bengal","Chartreux","Maine Coon","Munchkin","Persan","Sacré de Birmanie","Sphynx"]
  public createKitten : AbstractControl = this.fb.group({
    
    name:['', Validators.required],
    race:['', Validators.required],
    age:['', Validators.required],
    pictures:['', Validators.required]

  })



  constructor(private fb:FormBuilder,private kittenCard:KittenCardService) { }

  ngOnInit() {
    this.createKitten.patchValue({
      race: "Choose a race",
      age: 1
    })
  }

  onSubmit(){
    const value = this.createKitten.value
    this.kittenCard.newKitten(value)
    console.log(this.createKitten.value)

  }

  onFileSelect(input) {
   if (input.files && input.files[0]&& this.createKitten.valid) {
       var reader = new FileReader();
       reader.onload = (e: any) => {
         for(let i = 0; i<this.kittenCard.kittenList.length;i++){
         this.kittenCard.kittenList[i].pictures = e.target.result;
         }
       }
       reader.readAsDataURL(input.files[0]);
     }
   }
}
