import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  dropdownList = [];
  selectedItems = {};
  dropdownSettings = {};
  headers=["Location","Restaurant","AC or NON AC","Table NO","Total Members"]
  date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
    }
  ngOnInit(){
      this.dropdownList = [
        {"id":1,"itemName":"Adayar"},
        {"id":2,"itemName":"Guindy"},
        {"id":3,"itemName":"Madipakkam"},
        {"id":4,"itemName":"OMR"},
        {"id":5,"itemName":"Tambaram"},
        {"id":6,"itemName":"T.Nagar"},
        {"id":7,"itemName":"Velachery"}
];
      
      this.dropdownSettings = { 
                                singleSelection: true, 
                                text:"Select Location",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                maxHeight:200,
                                enableFilterSelectAll:false
                              };            
  }
  onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
      console.log(this.selectedItems)
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }

  

}
