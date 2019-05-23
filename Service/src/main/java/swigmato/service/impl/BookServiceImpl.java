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
        headers.add("AC or Non AC");
        headers.add("TableNo");
        headers.add("NumberofMembers");

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


        for(int i=0;i<locationList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(locationList.get(i));
            Location.add(itemRequest);
        }

        for(int i=0;i<RestaurantsList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(RestaurantsList.get(i));
            Restaurants.add(itemRequest);
        }
        for(int i=0;i<ACorNONACList.size();i++){
            ItemRequest itemRequest =new ItemRequest();
            itemRequest.setId(i+1);
            itemRequest.setItemName(ACorNONACList.get(i));
            AC_or_NonAc.add(itemRequest);
        }


        dropDown.put("headers",headers);
        dropDown.put("Location",Location);
        dropDown.put("Restaurant",Restaurants);
        dropDown.put("AC or Non AC",AC_or_NonAc);
        bookDropdownRes.setDropDown(dropDown);
        return bookDropdownRes;

    }


}

