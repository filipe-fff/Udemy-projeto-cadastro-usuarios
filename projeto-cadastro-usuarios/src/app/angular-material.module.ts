import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";



@NgModule({
    imports: [
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatProgressBarModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
    ],
    exports: [
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatProgressBarModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
    ],
})
export class AngularMaterial {}