package com.codestates.sebmainproject009.search.dto;

import com.codestates.sebmainproject009.search.entity.Item;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.http.StreamingHttpOutputMessage;

import java.util.Collection;
import java.util.List;

public class ItemResponse {

/*    @JsonProperty("body")
    private Body body;

    public Body getBody() {
        return body;
    }
    public void setBody(Body body) {
        this.body = body;
    }

    public static class Body{
        @JsonProperty("items")
        private List<Item> items;

        public  List<Item> getItems() {
            return items;
        }
        public void setItems(List<Item> items){
            this.items = items;
        }
    }*/

    private List<Item> items;

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

}
