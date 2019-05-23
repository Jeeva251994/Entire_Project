package swigmato.dao;


import org.springframework.stereotype.Component;
import swigmato.vo.request.login.LoginRequest;

@Component
public interface LoginDao {
    public String loginCheckdao(LoginRequest loginRequest);
}
