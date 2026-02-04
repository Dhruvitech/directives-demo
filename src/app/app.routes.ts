import { Routes } from '@angular/router';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { CustomComponent } from './custom/custom.component';

export const routes: Routes = [
    { path: '', redirectTo: '/structural', pathMatch: 'full' },
    { path: 'structural', component: StructuralComponent },
    { path: 'attribute', component: AttributeComponent },
    { path: 'component', component: ComponentDemoComponent },
    { path: 'custom', component: CustomComponent }
];
