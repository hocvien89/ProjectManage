// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PersonComponent } from './person.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        ReactiveFormsModule
    ],
    declarations: [
        PersonComponent,
    ],
    exports: [
        PersonComponent,
    ]
})
export class PersonModule {

}
