package swigmato.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swigmato.service.BookService;
import swigmato.vo.request.book.BookDropDownRes;
import swigmato.vo.request.book.BookDropdownReq;

@RestController
@RequestMapping("/book")
@CrossOrigin

public class BookController {

    @Autowired
    BookService bookService;


    @RequestMapping(value="/getBookdata", method =RequestMethod.POST, headers="Accept=application/json")

    public @ResponseBody
    BookDropDownRes logIn() {

        BookDropDownRes bookDropdownRes =new BookDropDownRes();

        try{
            bookDropdownRes = bookService.getInitialData();



        }
        catch (Exception e){

        }
        return bookDropdownRes;
    }


}