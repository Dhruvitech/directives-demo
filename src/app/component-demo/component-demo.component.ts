import { Component } from '@angular/core';
import { BoxComponent } from './box.component';

@Component({
  selector: 'app-component-demo',
  standalone: true,
  imports: [BoxComponent],
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent {}
