import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { user } from '../../class/user';
import { RouterModule } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
user_s=inject(UserService)
user_add:user={}
n?:any={}

  constructor(private router: Router) {}

  SignIn() {
    console.log("jj");
  
    this.user_s.getByUserNameAndPassword(this.user_add).subscribe(
      (response) => {
        console.log("Response from server:", response);
        if (!response) {
          this.router.navigate(['/signup']);
        }
        this.user_s.thisUser=this.user_add
        alert("משתמש קיים")
      },
      (error) => {
        console.log("Error:", error);
        this.router.navigate(['/signup']);  // נניח שהשגיאה היא שהמשתמש לא נמצא
      }
    );
  }

}
