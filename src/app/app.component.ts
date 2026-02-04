import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { CustomComponent } from './custom/custom.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        StructuralComponent,
        AttributeComponent,
        ComponentDemoComponent,
        CustomComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    page: 'structural' | 'attribute' | 'component' | 'custom' = 'structural';
}
