package swigmato.vo.request.book;

import java.util.List;

public class ItemRequest {

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    private Integer id;
    private String itemName;

}
