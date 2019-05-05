package controller;
import java.lang.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import service.loginService;
import vo.login.loginRequest;
@CrossOrigin
@RestController
@RequestMapping("/hello")
public class LoginController {

//    @Autowired
//     loginService LoginService;
    
    @RequestMapping("/hello")
    public String logIn(@RequestBody  loginRequest LoginRequest) {
        String a="";
        try{
//             a =  LoginService.loginCheck(LoginRequest);

        }
        catch (Exception e){

        }
        return a;
    }


}