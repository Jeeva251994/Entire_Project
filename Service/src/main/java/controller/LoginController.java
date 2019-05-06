package controller;
import java.lang.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.loginService;
import vo.login.loginRequest;


@CrossOrigin
@RestController
@RequestMapping("/hello")

public class LoginController {

    @Autowired
     loginService LoginService;
    
    @RequestMapping(value="/hello", method =RequestMethod.POST)

    public String logIn() {
                String a ="";
        try{
//             a =  LoginService.loginCheck();

        }
        catch (Exception e){

        }
        return a;
    }


}