import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  show = false;
  items = ['Pen', 'Book', 'Laptop'];
  status = 'pending';
}
