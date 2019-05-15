package swigmato.dao.impl;

import org.springframework.stereotype.Repository;
import swigmato.dao.LoginDao;
import swigmato.vo.login.LoginRequest;

@Repository
public class LoginDaoImpl implements LoginDao {

    @Override
    public String loginCheckdao(LoginRequest loginRequest) {
        try {
            if (loginRequest.getUsername().equals("admin") && loginRequest.getPwd().equals("admin")) {
                return "Login Successfull";
            } else
                return "Login Not Successfull ";
        }
        catch(Exception e){
            return "Exceptiojn Occured";

        }

    }


}

