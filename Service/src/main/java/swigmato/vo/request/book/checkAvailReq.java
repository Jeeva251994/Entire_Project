package swigmato.vo.request.book;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class checkAvailReq {
    @Autowired
    ItemRequest itemRequest;

    List<String> Location = new ArrayList<String>();
    List<String> Restaurant = new ArrayList<String>();
    List<String> ACorNonAC = new ArrayList<String>();

}

