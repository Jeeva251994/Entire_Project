package swigmato.service;
import org.springframework.stereotype.Component;
import swigmato.vo.login.LoginRequest;

@Component
public interface LoginService {
    public String loginCheck (LoginRequest loginRequest);
}
