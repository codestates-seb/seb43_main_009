package com.codestates.sebmainproject009.search.controller;


import com.codestates.sebmainproject009.search.entity.Item;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.validation.constraints.NotBlank;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.*;


@RestController
@RequestMapping("/search")
public class SearchController {

    @Value("${serviceKey}")
    private String serviceKey;

    private StringBuilder urlBuilder;

    @GetMapping
    public ResponseEntity getInfo(@NotBlank @RequestParam String itemName) throws IOException, URISyntaxException {

        urlBuilder = new StringBuilder("http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList");

        urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + serviceKey);
        urlBuilder.append("&" + URLEncoder.encode("itemName", "UTF-8")+ "=" + URLEncoder.encode(itemName, "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("type", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8"));

        URL url = new URL(urlBuilder.toString());

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url.toURI(), String.class);


        String responseBody = responseEntity.getBody();


        JSONObject jsonObject = new JSONObject(responseBody);
        JSONObject jsonObject1 = jsonObject.getJSONObject("body");



        JSONArray jsonArray;

        try{
            jsonArray = jsonObject1.getJSONArray("items");
        }catch (JSONException exception){
            return  ResponseEntity.ok().body("찾으시는 데이터가 존재하지 않습니다.");
        }


        if(!jsonArray.isEmpty()) {

            jsonArray = jsonObject1.getJSONArray("items");

            List<Object> list = jsonArray.toList();

            List<Item> resultList = new ArrayList<>();

            for (int i = 0; i < list.size(); i++) {

                Item item = Item.builder().jsonObject(jsonArray.getJSONObject(i)).build();

                resultList.add(item);
            }

            return ResponseEntity.ok().body(resultList);
        }
        else
            return ResponseEntity.ok().body(jsonObject1);
    }

}

