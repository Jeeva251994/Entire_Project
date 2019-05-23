package swigmato.vo.request.book;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public class BookDropdownReq {

    @Autowired
    ItemRequest itemRequest;

//    private List<String> headers;
    private List<ItemRequest> Location;
    private List<ItemRequest> Restaurant;
    private List<ItemRequest> AcorNonAC;
    private List<ItemRequest> TableNo;
    private List<ItemRequest> NumberofMembers;


//    public List<String> getHeaders() {
//        return headers;
//    }
//
//    public void setHeaders(List<String> headers) {
//        this.headers = headers;
//    }

    public List<ItemRequest> getLocation() {
        return Location;
    }

    public void setLocation(List<ItemRequest> location) {
        Location = location;
    }

    public List<ItemRequest> getRestaurant() {
        return Restaurant;
    }

    public void setRestaurant(List<ItemRequest> restaurant) {
        Restaurant = restaurant;
    }

    public List<ItemRequest> getAcorNonAC() {
        return AcorNonAC;
    }

    public void setAcorNonAC(List<ItemRequest> acorNonAC) {
        AcorNonAC = acorNonAC;
    }

    public List<ItemRequest> getTableNo() {
        return TableNo;
    }

    public void setTableNo(List<ItemRequest> tableNo) {
        TableNo = tableNo;
    }

    public List<ItemRequest> getNumberofMembers() {
        return NumberofMembers;
    }

    public void setNumberofMembers(List<ItemRequest> numberofMembers) {
        NumberofMembers = numberofMembers;
    }



}
