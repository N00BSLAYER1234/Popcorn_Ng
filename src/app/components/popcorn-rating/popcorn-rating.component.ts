import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popcorn-rating',
  standalone: true,
  imports: [],
  templateUrl: './popcorn-rating.component.html',
  styleUrl: './popcorn-rating.component.scss',
})
export class PopcornRatingComponent {
  @Input() rating?: number | null; // union type
  get ratingWidth() {
    return this.rating ? this.rating * 10 + '%' : '0';
  }
}
