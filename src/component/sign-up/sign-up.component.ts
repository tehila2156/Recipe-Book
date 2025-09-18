import { Component, inject } from '@angular/core';
import { user } from '../../class/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user_s=inject(UserService)
  user_add:user={}


  save()
  {
    this.user_s.post(this.user_add!).subscribe(
      user=>
      {
         alert(" נוסף לרשימת המשתמשים ")
      }
      ,
      err=>
      {
        console.log("שגיאה בהוספה",err)
      }
    )
  }
}
