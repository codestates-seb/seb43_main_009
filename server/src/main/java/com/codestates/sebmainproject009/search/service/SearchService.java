package com.codestates.sebmainproject009.search.service;

import com.codestates.sebmainproject009.search.entity.Item;
import com.codestates.sebmainproject009.search.entity.ItemList;
import com.codestates.sebmainproject009.user.entity.User;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {

    @Value("${serviceKey}")
    private String serviceKey;

    public List<ItemList> getItemListFromJsonArrayWithUser(JSONArray jsonArray, User user) {

        List<Object> list = jsonArray.toList();
        List<ItemList> itemListFromJsonArray = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            Item item = Item.builder().jsonObject(jsonArray.getJSONObject(i)).build();
            ItemList itemList = ItemList.builder().jsonObject(jsonArray.getJSONObject(i)).build();

            if(user.getAllergy().toString().equals("NONE"))
                itemList.setAllergy("회원님이 설정하신 맞춤추천 데이터가 존재하지 않습니다.");
            else{
                if(item.getIntrcQesitm().contains(user.getAllergy().getAllergy())){
                    itemList.setAllergy("주의사항 있음.");
                } else if(user.getOtherAllergy()!=null){
                    if(item.getIntrcQesitm().contains(user.getOtherAllergy())){
                        itemList.setAllergy("주의사항 있음.");
                    } else {
                        itemList.setAllergy("주의사항 없음.");
                    }
                }
                else {
                    itemList.setAllergy("주의사항 없음.");
                }
            }

            itemListFromJsonArray.add(itemList);
        }

        return itemListFromJsonArray;
    }

    public List<ItemList> getItemListFromJsonArrayWithoutUser(JSONArray jsonArray) {

        List<Object> list = jsonArray.toList();
        List<ItemList> itemListFromJsonArray = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            ItemList itemList = ItemList.builder().jsonObject(jsonArray.getJSONObject(i)).build();

            itemList.setAllergy("로그인 후 확인 가능");

            itemListFromJsonArray.add(itemList);
        }

        return itemListFromJsonArray;
    }

    public List<Item> getItemInfoFromJsonArrayWithUser(JSONArray jsonArray, User user, String itemName) {

        List<Object> list = jsonArray.toList();

        List<Item> itemFromJsonArray = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {

            Item item = Item.builder().jsonObject(jsonArray.getJSONObject(i)).build();

            if(user.getAllergy().toString().equals("NONE")) //맞춤 설정을 하지 않은 경우
                item.setAllergy("회원님이 설정하신 맞춤추천 데이터가 존재하지 않습니다.");
            else if (user.getOtherAllergy()!=null) { // 맞춤 설정 중 기타 부분은 따로 처리
                if(item.getIntrcQesitm().contains(user.getOtherAllergy())){
                    item.setAllergy("회원님이 설정하신 '"+user.getOtherAllergy()+"' 에 연관된 주의사항이 있습니다. 주의하세요.");
                } else
                    item.setAllergy("회원님이 설정하신 '"+user.getOtherAllergy()+"' 에 대한 상호작용이 존재하지 않습니다.");
            } else{ // 맞춤 설정을 한 경우
                if(item.getIntrcQesitm().contains(user.getAllergy().getAllergy())){
                    // 맞춤 설정한 알러지가 주의 사항에 포함된 경우
                    if(user.getAllergy().getAllergy().equals("항생")||user.getAllergy().getAllergy().equals("진통"))
                        item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"제 계열에 연관된 주의사항이 있습니다. 주의하세요.");
                    else
                        item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"에 연관된 주의사항이 있습니다. 주의하세요.");
                }
                else { // 맞춤 설정한 알러지가 주의 사항에 포함되지 않은 경우
                    if(user.getAllergy().getAllergy().equals("항생")||user.getAllergy().getAllergy().equals("진통"))
                        item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"제 계열에 대한 상호작용이 존재하지 않습니다.");
                    else if(user.getAllergy().getAllergy().equals("기타"))
                        item.setAllergy("회원님이 설정하신 '"+user.getOtherAllergy()+"' 에 대한 상호작용이 존재하지 않습니다.");
                    else
                        item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"에 대한 상호작용이 존재하지 않습니다.");
                }
            }


            if(item.getItemName().equals(itemName))
                itemFromJsonArray.add(item);
        }

        return itemFromJsonArray;
    }

    public List<Item> getItemInfoFromJsonArrayWithoutUser(JSONArray jsonArray, String itemName) {

        List<Object> list = jsonArray.toList();

        List<Item> itemFromJsonArray = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {

            Item item = Item.builder().jsonObject(jsonArray.getJSONObject(i)).build();

            item.setAllergy("로그인하여 맞춤추천 설정 후에 확인하실 수 있습니다.");

            if(item.getItemName().equals(itemName))
                itemFromJsonArray.add(item);
        }

        return itemFromJsonArray;
    }
}
