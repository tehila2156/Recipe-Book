import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipyService } from '../../service/recipy/recipy.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recipy: any;  // או טיפוס המתכון שלך
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private recipyService: RecipyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');  // קבלת ה-ID מה-URL
      if (this.id) {
        this.getRecipyById(this.id);  // קריאה לשירות כדי לקבל את המתכון
      }
    });
  
}
  getRecipyById(id: string): void {
    this.recipyService.getById(id).subscribe(
      (data) => {
        this.recipy = data;  // הצגת המתכון
      },
      (error) => {
        console.log('Error fetching recipe:', error);
      }
    );
  }
}
