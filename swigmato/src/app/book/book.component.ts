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

  dropdownHeaders: any[] = [];
  name:any[]=[];
  dropdownList = [];
  selectedItems = {};
  dropdownSettings = {};
  hotelCounts=[1,2,3,4,5,6]
  date: Date = new Date();
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
      console.log(item);
      console.log(this.selectedItems);
      console.log(this.selectedItems)
  }
  OnItemDeSelect(item: any) {
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
      console.log(items);
  }
  onDeSelectAll(items: any) {
      console.log(items);
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


  resetAll(){
      this.name=[];
   
}
}