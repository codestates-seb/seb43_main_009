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



    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName.replaceAll("<br />","").replaceAll("<p>","").replaceAll("</p>","").replaceAll("\n","");
    }

    public String getEntpName() {
        return entpName;
    }

    public void setEntpName(String entpName) {
        this.entpName = entpName.replaceAll("<br />","").replaceAll("<p>","").replaceAll("</p>","").replaceAll("\n","");
    }

    public String getEfcyQesitm() {
        return efcyQesitm;
    }

    public void setEfcyQesitm(String efcyQesitm) {
        this.efcyQesitm = efcyQesitm.replaceAll("<br />","").replaceAll("<p>","").replaceAll("</p>","").replaceAll("\n","");
    }

    public String getUseMethodQesitm() {
        return useMethodQesitm;
    }

    public void setUseMethodQesitm(String useMethodQesitm) {
        this.useMethodQesitm = useMethodQesitm.replaceAll("<br />","").replaceAll("<p>","").replaceAll("</p>","").replaceAll("\n","");
    }

    public String getAtpnQesitm() {
        return atpnQesitm;
    }



    public void setAtpnQesitm(String atpnQesitm) {
        this.atpnQesitm = atpnQesitm.replaceAll("<br />","").replaceAll("<p>","").replaceAll("</p>","").replaceAll("\n","");
    }

    public String getIntrcQesitm() {
        return intrcQesitm;
    }

    public void setIntrcQesitm(String intrcQesitm) {
        this.intrcQesitm = intrcQesitm.replaceAll("<br />","").replaceAll("<p>","").replaceAll("</p>","").replaceAll("\n","");
    }

    public String getItemImage() {
        return itemImage;
    }

    public void setItemImage(String itemImage) {
        this.itemImage = itemImage.replaceAll("<br />","").replaceAll("<p>","").replaceAll("</p>","").replaceAll("\n","");
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
    }
    public String removeTag(String data){
        return data.replaceAll("<br />","")
                .replaceAll("<p>","")
                .replaceAll("</p>","")
                .replaceAll("\n","")
                .replaceAll("<sup>1</sup>", "")
                .replaceAll("<sup>2</sup>", "")
                .replaceAll("<sup>3</sup>", "")
                .replaceAll("<sup>4</sup>", "")
                .replaceAll("<sup>5</sup>", "");




    }

}

