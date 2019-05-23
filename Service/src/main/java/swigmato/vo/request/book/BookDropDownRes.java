package swigmato.vo.request.book;

import java.util.List;
import java.util.Map;

public class BookDropDownRes {
    public Map<String, List> getDropDown() {
        return dropDown;
    }

    public void setDropDown(Map<String, List> dropDown) {
        this.dropDown = dropDown;
    }

    private Map <String, List> dropDown;
}
