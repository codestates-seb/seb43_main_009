package com.codestates.sebmainproject009.search.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.json.JSONObject;

@Getter
@Setter
public class Item {
    @JsonProperty("itemName") // 제품명
    private String itemName;

    @JsonProperty("entpName") // 업체명
    private String entpName;

    @JsonProperty("efcyQesitm") // 효눙
    private String efcyQesitm;

    @JsonProperty("useMethodQesitm") // 사용법
    private String useMethodQesitm;

    @JsonProperty("atpnQesitm") // 주의사항
    private String atpnQesitm;

    @JsonProperty("intrcQesitm") // 상호작용
    private String intrcQesitm;

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

    public String getEfcyQesitm() {
        return efcyQesitm;
    }

    public void setEfcyQesitm(String efcyQesitm) {
        this.efcyQesitm = efcyQesitm;
    }

    public String getUseMethodQesitm() {
        return useMethodQesitm;
    }

    public void setUseMethodQesitm(String useMethodQesitm) {
        this.useMethodQesitm = useMethodQesitm;
    }

    public String getAtpnQesitm() {
        return atpnQesitm;
    }



    public void setAtpnQesitm(String atpnQesitm) {
        this.atpnQesitm = atpnQesitm;
    }

    public String getIntrcQesitm() {
        return intrcQesitm;
    }

    public void setIntrcQesitm(String intrcQesitm) {
        this.intrcQesitm = intrcQesitm;
    }

    public String getItemImage() {
        return itemImage;
    }

    public void setItemImage(String itemImage) {
        this.itemImage = itemImage;
    }


    @Builder
    public Item(JSONObject jsonObject) {
        this.setItemName(removeTag(jsonObject.get("itemName").toString()));
        this.setEntpName(removeTag(jsonObject.get("entpName").toString()));
        this.setEfcyQesitm(removeTag(jsonObject.get("efcyQesitm").toString()));
        this.setUseMethodQesitm(removeTag(jsonObject.get("useMethodQesitm").toString()));
        this.setAtpnQesitm(removeTag(jsonObject.get("atpnQesitm").toString()));
        this.setIntrcQesitm(removeTag(jsonObject.get("intrcQesitm").toString()));
        this.setItemImage(removeTag(jsonObject.get("itemImage").toString()));

        if(this.getEntpName().equals("null")) {
            this.setEntpName("업체명이 명시되어 있지 않습니다.");
        }
        if(this.getEfcyQesitm().equals("null")) {
            this.setEfcyQesitm("효능이 명시되어 있지 않습니다.");
        }
        if(this.getUseMethodQesitm().equals("null")) {
            this.setUseMethodQesitm("사용법이 명시되어 있지 않습니다.");
        }
        if(this.getAtpnQesitm().equals("null")) {
            this.setAtpnQesitm("주의사항이 명시되어 있지 않습니다.");
        }
        if(this.getIntrcQesitm().equals("null")) {
            this.setIntrcQesitm("상호작용이 명시되어 있지 않습니다.");
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

