package com.codestates.sebmainproject009.search.controller;


import com.codestates.sebmainproject009.auth.jwt.JwtTokenizer;
import com.codestates.sebmainproject009.search.entity.Item;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.service.UserService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
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

    private JwtTokenizer jwtTokenizer;

    private UserService userService;

    public SearchController(JwtTokenizer jwtTokenizer, UserService userService) {
        this.jwtTokenizer = jwtTokenizer;
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity getInfo(@NotBlank @RequestParam String itemName, @Nullable @RequestHeader("Authorization") String authorizationHeader) throws IOException, URISyntaxException {

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

        // userId 뽑기
        String token = getToken(authorizationHeader);
        Long userId = getUserId(token);
        User user;
        if(userId!=null)
            user = userService.findVerifiedUser(userId);
        else user = null;



        if(!jsonArray.isEmpty()) {

            jsonArray = jsonObject1.getJSONArray("items");

            List<Object> list = jsonArray.toList();

            List<Item> resultList = new ArrayList<>();

            for (int i = 0; i < list.size(); i++) {

                Item item = Item.builder().jsonObject(jsonArray.getJSONObject(i)).build();

                if(user != null) {
                    if(user.getAllergy().toString().equals("NONE"))
                        item.setAllergy("회원님이 설정하신 맞춤추천 데이터가 존재하지 않습니다.");
                    else{
                        if(item.getIntrcQesitm().contains(user.getAllergy().getAllergy())){
                            if(user.getAllergy().getAllergy().equals("항생")||user.getAllergy().getAllergy().equals("진통"))
                                item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"제 계열에 연관된 주의사항이 있습니다. 주의하세요.");
                            else
                                item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"에 연관된 주의사항이 있습니다. 주의하세요.");
                        }
                        else {
                            if(user.getAllergy().getAllergy().equals("항생")||user.getAllergy().getAllergy().equals("진통"))
                                item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"제 계열에 대한 상호작용이 존재하지 않습니다.");
                            else
                             item.setAllergy("회원님이 설정하신 "+user.getAllergy().getAllergy()+"에 대한 상호작용이 존재하지 않습니다.");
                        }
                    }
                } else {
                    item.setAllergy("로그인하여 맞춤추천 설정 후에 확인하실 수 있습니다.");
                }

                resultList.add(item);
            }

            return ResponseEntity.ok().body(resultList);
        }
        else
            return ResponseEntity.ok().body(jsonObject1);
    }

    private Long getUserId(String token) {

        Long userId;

        if (token != null) {
            userId = jwtTokenizer.extractUserIdFromToken(token);
        }
        else userId = null;

        return userId;
    }

    private String getToken(String authorizationHeader) {

        String token;

        if(authorizationHeader !=null) {
            token = jwtTokenizer.extractTokenFromHeader(authorizationHeader);
        }
        else
            token = null;

        return token;
    }


}

