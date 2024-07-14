import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';



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
    ],
})
export class AngularMaterial {}