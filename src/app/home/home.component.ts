import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { userData } from '../../models/user-list';
import { UserModel } from '../../models/user-model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { TransformPipe } from "../transform.pipe";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatTableModule, MatFormFieldModule, TransformPipe, MatIconModule, MatMenuModule, MatButtonModule]
})
export class HomeComponent {
  userData: UserModel[] = userData
  displayedColumns: string[] = Object.keys(userData[0]);
  dataSource=new MatTableDataSource(userData);

  constructor(public _dialog: MatDialog,private _cdr:ChangeDetectorRef) { }

  ngOnInit() {
    console.log(this.displayedColumns);
    this.displayedColumns.push("actions");
  }

  openDialog(row: UserModel) {
    this._dialog.open(EditDialogComponent, {
      data: row,
      disableClose: false,
      autoFocus: true,
      width: "30rem",
      height: "30rem",
    }).afterClosed().subscribe(result=>{
      this.dataSource.data[result.id -1]=result;
      this.dataSource._updateChangeSubscription();
      
      console.log(this.userData);
      
    })
  }

  editUser(row: UserModel) {
    this.openDialog(row);
  }

  deleteUser(row: UserModel) {

  }

  getHeader(column: string) {
    // if (column === "id") return "Id";
    // else if (column === "firstName") return "İsim";
    // else if (column === "lastName") return "Soyisim";
    // else if (column === "age") return "Yaş";
    // else if (column === "gender") return "Cinsiyet";
    // else if (column === "email") return "Mail";
    // else if (column === "company") return "Şirket Adı";
    // else if (column === "phone") return "Telefon";
    // else return "";

    //

    switch (column) {
      case "id":
        return "Id";
      case "firstName":
        return "İsim";
      case "lastName":
        return "Soyisim";
      case "age":
        return "Yaş";
      case "gender":
        return "Cinsiyet";
      case "email":
        return "Mail";
      case "company":
        return "Şirket Adı";
      case "phone":
        return "Telefon";
      default:
        return "";
    }
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}




