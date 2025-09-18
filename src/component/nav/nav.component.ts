import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { user } from '../../class/user';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

user_s=inject(UserService)  
}
