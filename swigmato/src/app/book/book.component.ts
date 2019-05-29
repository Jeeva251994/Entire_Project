import {
  Component,
  OnInit
} from '@angular/core';
import {
  BookServiceService
} from './book-service.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookServiceService: BookServiceService) {}
  selectedAvail={};
  dropdownHeaders: any[] = [];
  dropdownAvailHeaders:any[]=[];
  dropdownAvailList:any[]=[];
  name:any[]=[];
  dropdownList = [];
  selectedItems = {};
  selected={};
  dropdownSettings = {};
  hotelCounts=[1,2,3,4,5,6]
  date: Date = new Date();
  checkAvailClicked:boolean = true;
  confirmButton:boolean;
  settings = {
      bigBanner: true,
      timePicker: false,
      format: 'dd-MM-yyyy',
      defaultOpen: false
  }
  ngOnInit() {
      this.dropDownData();


      this.dropdownSettings = {
          singleSelection: true,
          text: "Select here",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          maxHeight: 200,
          enableFilterSelectAll: false
      };
  }
  onItemSelect(item: any) {
  let keys = Object.keys(this.selected)
  if(keys.length == 3){
    this.checkAvailClicked = false
    this.confirmButton =false;
    this.selectedAvail={};
  }
  }
  
  dropDownData() {
      this.bookServiceService.getDropDownData()
          .subscribe(
              (data) => {
                  let datas;
                  let dropDowndata;
                  datas = data.dropDown;
                  this.dropdownHeaders = datas['headers'];
                  dropDowndata = datas;
                  this.dropdownHeaders.map((item) =>
                      this.dropdownList.push(dropDowndata[item])
                  )

              }
          )
  }

  checkAvailability(){
      console.log(this.selected)
      this.checkAvailClicked = true;
      this.confirmButton = true;
      this.bookServiceService.checkAvailability(this.selected)
      .subscribe((data)=>{
        let datas;
        let dropDowndata;
        datas = data.dropDown;
        this.dropdownAvailHeaders = datas['headers'];
        dropDowndata = datas;
        this.dropdownAvailHeaders.map((item) =>
            this.dropdownAvailList.push(dropDowndata[item])
      )});
  }


  resetAll(){
      this.name=[];
   
}
}