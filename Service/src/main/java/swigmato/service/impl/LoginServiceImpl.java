package swigmato.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import swigmato.service.LoginService;
import swigmato.vo.login.LoginRequest;
import swigmato.dao.LoginDao;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginDao loginDao;
    @Override
    public String loginCheck(LoginRequest LoginRequest) {
        String result;
        try {
            result = loginDao.loginCheckdao(LoginRequest);
        }
        catch (Exception e){
            result = "Exception Occured";
        }
      return result;
    }
}
