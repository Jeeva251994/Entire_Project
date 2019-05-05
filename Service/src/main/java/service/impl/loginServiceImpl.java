package service.impl;

import service.loginService;
import vo.login.loginRequest;

public class loginServiceImpl implements loginService {

    @Override
    public String loginCheck(loginRequest LoginRequest) {
      return "Hello";
    }
}
