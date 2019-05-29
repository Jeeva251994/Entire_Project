package swigmato.service.impl;

import org.springframework.stereotype.Service;
import swigmato.service.BookService;
import swigmato.vo.request.book.BookDropDownRes;
import swigmato.vo.request.book.BookDropdownReq;
import swigmato.vo.request.book.ItemRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service

public class BookServiceImpl implements BookService {

    @Override
    public BookDropDownRes  getInitialData(){
        int selectionId;
        List<String> headers = new ArrayList<String>();
        List<String> locationList = new ArrayList<String>();
        List<String> RestaurantsList = new ArrayList<String>();
        List<String> ACorNONACList = new ArrayList<String>();
        List<ItemRequest> Location = new ArrayList<ItemRequest>();
        List<ItemRequest> Restaurants = new ArrayList<ItemRequest>();
        List<ItemRequest> AC_or_NonAc = new ArrayList<ItemRequest>();
        List<ItemRequest> itemRequestList = new ArrayList<ItemRequest>();
        Map<String, List> dropDown = new HashMap<>();
        BookDropDownRes bookDropdownRes =new BookDropDownRes();

        headers.add("Location");
        headers.add("Restaurant");
        headers.add("ACorNonAC");

        locationList.add("Adayar");
        locationList.add("Guindy");
        locationList.add("Madipakkam");
        locationList.add("OMR");
        locationList.add("Tambaram");
        locationList.add("T.Nagar");
        locationList.add("Velachery");

        RestaurantsList.add("A2B");
        RestaurantsList.add("Aseef");
        RestaurantsList.add("Buhari");
        RestaurantsList.add("Dindugal Thalappakatti");
        RestaurantsList.add("Saravana Bhavan");
        RestaurantsList.add("T.Zaitoon");

        ACorNONACList.add("AC");
        ACorNONACList.add("Non-AC");

        selectionId =1;
        for(int i=0;i<locationList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(locationList.get(i));
            itemRequest.setSelectionId(selectionId);
            Location.add(itemRequest);
        }
        selectionId =2;
        for(int i=0;i<RestaurantsList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(RestaurantsList.get(i));
            itemRequest.setSelectionId(selectionId);
            Restaurants.add(itemRequest);
        }
        selectionId=3;
        for(int i=0;i<ACorNONACList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(ACorNONACList.get(i));
            itemRequest.setSelectionId(selectionId);
            AC_or_NonAc.add(itemRequest);
        }


        dropDown.put("headers",headers);
        dropDown.put("Location",Location);
        dropDown.put("Restaurant",Restaurants);
        dropDown.put("ACorNonAC",AC_or_NonAc);
        bookDropdownRes.setDropDown(dropDown);
        return bookDropdownRes;

    }

    @Override
    public BookDropDownRes  getAvailData() {
        List<Integer> tableNoList = new ArrayList<Integer>();
        List<ItemRequest> tableNo = new ArrayList<ItemRequest>();
        List<Integer> noOfMembersList = new ArrayList<Integer>();
        List<ItemRequest> noOfMembers = new ArrayList<ItemRequest>();
        Map<String, List> dropDown = new HashMap<>();
        List<String> headers = new ArrayList<String>();
        BookDropDownRes bookDropdownRes =new BookDropDownRes();

        headers.add("Table No");
        headers.add("No Of Members");
        for(int i=1;i<=15;i++)
        {
            tableNoList.add(i);
            noOfMembersList.add(i);
        }

        int selectionId;
        selectionId=5;
        for(int i=0;i<tableNoList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(String.valueOf(tableNoList.get(i)));
            itemRequest.setSelectionId(selectionId);
            tableNo.add(itemRequest);
        }

        selectionId=6;
        for(int i=0;i<noOfMembersList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(String.valueOf(noOfMembersList.get(i)));
            itemRequest.setSelectionId(selectionId);
            noOfMembers.add(itemRequest);
        }

        dropDown.put("Table No",tableNo);
        dropDown.put("No Of Members",noOfMembers);
        dropDown.put("headers",headers);
        bookDropdownRes.setDropDown(dropDown);

        return bookDropdownRes;
    }



}

