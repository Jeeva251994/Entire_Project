package service;
import org.springframework.stereotype.Component;
import vo.login.loginRequest;

@Component
public interface loginService {
    public String loginCheck (loginRequest LoginRequest);
}
