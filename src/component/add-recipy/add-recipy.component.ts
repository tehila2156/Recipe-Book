import { Component, inject } from '@angular/core';
import { recipy } from '../../class/recipy';
import { FormsModule } from "@angular/forms"
import { RecipyService } from '../../service/recipy/recipy.service';
@Component({
  selector: 'app-add-recipy',
  imports: [FormsModule],
  templateUrl: './add-recipy.component.html',
  styleUrl: './add-recipy.component.css'
})
export class AddRecipyComponent {
 //recipy_add?:recipy={};
 recipy_s=inject(RecipyService);

 recipy_add: recipy = {
  name: '',
  difficult_level: 0,
  Ingredients: [""],
  time: 0,
  img: ''
};


 save()
 { 
  console.log("✅ הכפתור עובד!");
  console.log("🛠 נתונים שנשלחים לשרת:", this.recipy_add);

   this.recipy_s.post(this.recipy_add!).subscribe(
     dish=>
     {
        alert("נוסף לרשימת המתכונים")
     }
     ,
     err=>
     {
       console.log("שגיאה בהוספה",err)
     }
   )
 }









}
