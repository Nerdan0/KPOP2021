import { Component, OnInit, Inject, Input, OnChanges,ViewChild } from '@angular/core';
import { AppService, Results } from './app.service';
import{MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Storage } from '@ionic/storage-angular';
import {MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[AppService]
})
export class AppComponent implements OnInit
{
  title = 'Lab6';
  users: any[];
  storageId = 0;
  usersStorage:any[];
  


  displayedColumns:string[] = ['name','surname','dob','city','postcode']
  constructor(private appService:AppService, private dialog:MatDialog, private selectedStorage:Storage){
    //console.log("constr")
    this.selectedStorage.create();
    if(!this.selectedStorage.get("storageId"))
    {

      this.selectedStorage.set("storageId",0);

    }
  }

  ngOnInit():void
  {
    //console.log("oninit")
    this.appService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users.results;
      
    console.log(this.users);
    })
    

  }

  /*async ngOnChanges()
  {
    console.log("onchange")
    if(await this.selectedStorage.length()!=0)
    {

      this.usersStorage = [];
      this.selectedStorage.forEach((key,value,index)=>{if(key!="storageId"){this.usersStorage.push(value)}});

    }
    

  }*/

  /*async ngDoCheck()
  {
    console.log("docheck")

    if (this.checkLength!=(await this.selectedStorage.length()))
    {

      
      this.usersStorage = [];
      this.selectedStorage.forEach((key,value,index)=>{if(key!="storageId"){this.usersStorage.push(value)}});


    }

  }*/

  async onRowClicked(row:any){

      //console.log(row);
      this.dialog.open(DialogComp,{
      data:row});
      //console.log(await this.selectedStorage.length());
      //console.log(await this.selectedStorage.get("storageId"));
      let tmpData = (await this.selectedStorage.get("storageId")).toString();
      //console.log(tmpData);
      this.selectedStorage.set(tmpData,row);      
      this.selectedStorage.set("storageId",await this.selectedStorage.get("storageId") + 1 );
      if(await this.selectedStorage.length()!=0)
      {

        this.usersStorage = [];
        this.selectedStorage.forEach((key,value,index)=>{if(value!="storageId"){this.usersStorage.push(key)}});

      }
      //console.log(this.usersStorage);
      //await this.selectedStorage.forEach((key,value,index)=>{console.log(key+" "+value)});
  }

  async clearStorage()
  {

    this.selectedStorage.clear();
    //console.log( await this.selectedStorage.length())
    this.selectedStorage.set("storageId",0);

  }
}

@Component({
  selector:'dialogComp',
  template:`<p>Name:{{data.name.first}}
  <p>Surname:{{data.name.last}}
  <p>DoB:{{data.dob.date}}
  <p>City:{{data.location.city}}
  <p>Postcode:{{data.location.postcode}}
  `
})
export class DialogComp{

  constructor(public dialogRef: MatDialogRef<DialogComp>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
}

@Component({
  selector:'storageEnjoyer',
  templateUrl: 'app.storageEnjoyer.html'
})
export class StorageEnjoyer implements OnChanges
{

  @Input() inpUsers:any[];
  @ViewChild("childTable") table: MatTable<any>;
  //users = new MatTableDataSource();
  //users = [...this.inpUsers];
  users:any[];
  tmpUsers = [];
  displayedColumns:string[] = ['name','surname','dob','city','postcode']

  constructor(){
  }
  
  ngOnChanges()
  { 
    /*let data = this.users.data;
    data = this.inpUsers;
    this.users.data = data;*/
    //this.users = [...this.users];
    //this.tmpUsers =this.inpUsers;
    if(this.inpUsers)
    {

      this.users =this.inpUsers;
      //this.users =[...this.inpUsers];

    }
    
    //this.users = [...this.users]
    //console.log("changed");
    //console.log(this.users);
    //console.log("---");
    
    //console.log("---");
    if(this.users){
      if(this.table){
        console.log(this.table)
        this.table.renderRows();
      }
    }

  }

}