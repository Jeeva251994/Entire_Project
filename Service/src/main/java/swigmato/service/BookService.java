package swigmato.service;

import org.springframework.stereotype.Component;
import swigmato.vo.request.book.BookDropDownRes;
import swigmato.vo.request.book.BookDropdownReq;

import java.util.List;

@Component

public interface BookService {
    public BookDropDownRes getInitialData ();
}

