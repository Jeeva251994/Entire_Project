package swigmato.controller;
import java.lang.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swigmato.service.LoginService;
import swigmato.vo.login.LoginRequest;


@RestController
@RequestMapping("/login")
@CrossOrigin

public class LoginController {

    @Autowired
    LoginService loginService;


    @RequestMapping(value="/loginCheck", method =RequestMethod.POST, headers="Accept=application/json")

    public @ResponseBody
    LoginRequest logIn(@RequestBody LoginRequest loginRequestIn) {

        LoginRequest loginRequest =new LoginRequest();
        try{
            loginRequest.setUsername(loginService.loginCheck(loginRequestIn));

        }
        catch (Exception e){

        }
        return loginRequest;
    }


}