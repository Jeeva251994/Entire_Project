package service.impl;

import org.springframework.stereotype.Service;
import service.loginService;
import vo.login.loginRequest;

@Service
public class loginServiceImpl implements loginService {

    @Override
    public String loginCheck(loginRequest LoginRequest) {
      return "Hello";
    }
}
