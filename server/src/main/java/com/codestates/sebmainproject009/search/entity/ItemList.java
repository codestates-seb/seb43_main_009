package com.codestates.sebmainproject009.search.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.json.JSONObject;

@Getter
@Setter
public class ItemList {

    @JsonProperty("itemName") // 제품명
    private String itemName;

    @JsonProperty("entpName") // 업체명
    private String entpName;

    @JsonProperty("itemImage") // 이미지 url
    private String itemImage;

    private String allergy;

    public String getAllergy() {
        return allergy;
    }

    public void setAllergy(String allergy) {
        this.allergy = allergy;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getEntpName() {
        return entpName;
    }

    public void setEntpName(String entpName) {
        this.entpName = entpName;
    }


    public String getItemImage() {
        return itemImage;
    }

    public void setItemImage(String itemImage) {
        this.itemImage = itemImage;
    }


    @Builder
    public ItemList(JSONObject jsonObject) {
        this.setItemName(removeTag(jsonObject.get("itemName").toString()));
        this.setEntpName(removeTag(jsonObject.get("entpName").toString()));
        this.setItemImage(removeTag(jsonObject.get("itemImage").toString()));

        if(this.getEntpName().equals("null")) {
            this.setEntpName("업체명이 명시되어 있지 않습니다.");
        }

        if(this.getItemImage().equals("null")) {
            this.setItemImage("이미지가 존재하지 않습니다.");
        }

    }
    public String removeTag(String data){
        return data.replaceAll("<br />","")
                .replaceAll("<p>","")
                .replaceAll("</p>","")
                .replaceAll("\n","")
                .replaceAll("<sup>","")
                .replaceAll("</sup>","")
                .replaceAll("<sub>","")
                .replaceAll("</sub>","")
                ;

    }

}



