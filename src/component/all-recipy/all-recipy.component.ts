import { Component, inject } from '@angular/core';
import { RecipyService } from '../../service/recipy/recipy.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-recipy',
  imports: [RouterModule],
  templateUrl: './all-recipy.component.html',
  styleUrl: './all-recipy.component.css'
})
export class AllRecipyComponent {
  recipy_s=inject(RecipyService);
  
  constructor(private router: Router) {}

navigateToDetail(id:string): void {
 
  this.router.navigate([`/details/${id} `]);
}


  getAll(){
    this.recipy_s.getAll().subscribe(
      arr=>
      {
        console.log(arr);
        this.recipy_s.arr_recipy=[...arr]
  
      },
      err=>
      {
        console.log(err);
      }
    )
  }
  ngOnInit()
  {
    this.getAll();
  }
  
}
