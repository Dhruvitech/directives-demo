import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() text = '';
}
