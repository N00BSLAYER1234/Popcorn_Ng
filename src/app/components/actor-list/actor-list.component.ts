import { Component, Input } from '@angular/core';
import { ActorCardComponent } from '../actor-card/actor-card.component';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-actor-list',
  standalone: true,
  imports: [ActorCardComponent],
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.scss',
})
export class ActorListComponent {
  @Input() title?: string;
  @Input({ required: true }) actors: Actor[] | [] = [];
}
