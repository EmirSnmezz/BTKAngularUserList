import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../../models/user-model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.scss'
})
export class EditDialogComponent {
  dialogForm: any;
  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: UserModel) {
  }

  ngOnInit() {
    this.dialogForm = new FormGroup(
      {
        id: new FormControl(this.data?.id),
        firstName: new FormControl(this.data.firstName),
        lastName: new FormControl(this.data.lastName),
        email: new FormControl(this.data.email),
        gender: new FormControl(this.data.gender),
        age: new FormControl(this.data.age),
        phone: new FormControl(this.data.phone),
        company: new FormControl(this.data.company.companyName)
      },
    )
    console.log(this.dialogForm);
  }

  save(){
    this.dialogRef.close(this.dialogForm.value)
  }
}
