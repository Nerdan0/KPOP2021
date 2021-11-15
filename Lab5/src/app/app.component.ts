import { Component, OnInit, Inject } from '@angular/core';
import { AppService, Results } from './app.service';
import{MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {
  title = 'Lab5';
  users: any[];
  displayedColumns:string[] = ['name','email','login','password','cell']
  constructor(private appService:AppService, private dialog:MatDialog){}

  ngOnInit():void
  {

    this.appService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users.results;
      
    console.log(this.users);
    })


  }

  onRowClicked(row:any){

      console.log(row);
      this.dialog.open(DialogComp,{
      data:row});

  }
}

@Component({
  selector:'dialogComp',
  template:`<p>Name:{{data.name.first}}
  <p>Email:{{data.email}}
  <p>Login:{{data.login.username}}
  <p>Password:{{data.login.password}}
  <p>Cell:{{data.cell}}
  `
})
export class DialogComp{

  constructor(public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
}