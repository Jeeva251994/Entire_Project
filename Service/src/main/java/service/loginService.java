package service;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import vo.login.loginRequest;

@Service
public interface loginService {
    public String loginCheck (loginRequest LoginRequest);
}
