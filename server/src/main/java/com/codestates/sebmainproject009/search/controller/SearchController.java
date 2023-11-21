package com.codestates.sebmainproject009.search.controller;


import com.codestates.sebmainproject009.json.service.JSONService;
import com.codestates.sebmainproject009.api.service.APIServiceImpl;
import com.codestates.sebmainproject009.auth.jwt.JwtTokenizer;
import com.codestates.sebmainproject009.search.entity.Item;
import com.codestates.sebmainproject009.search.entity.ItemList;
import com.codestates.sebmainproject009.search.service.SearchService;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

import java.net.URL;
import java.util.*;


@RestController
@RequestMapping("/search")
public class SearchController {

    private final JwtTokenizer jwtTokenizer;

    private final UserService userService;

    private final SearchService searchService;

    private final JSONService jsonService;

    private final APIServiceImpl APIServiceImpl;

    public SearchController(JwtTokenizer jwtTokenizer, UserService userService, SearchService searchService, JSONService jsonService, APIServiceImpl APIServiceImpl) {
        this.jwtTokenizer = jwtTokenizer;
        this.userService = userService;
        this.searchService = searchService;
        this.jsonService = jsonService;
        this.APIServiceImpl = APIServiceImpl;
    }

    @GetMapping
    public ResponseEntity getSearchList(@NotNull @RequestParam String itemName,
                                        @Nullable @RequestHeader("Authorization") String authorizationHeader){

        try {
            // request url 만들기
            String requestStringURL = APIServiceImpl.getURLWithEasyDrugAPI(itemName, "json", "100");
            URL requestURL = new URL(requestStringURL);

            // request url 을 통해서 원하는 JSON Object 로 변환시키기
            JSONObject jsonBody = jsonService.getJsonBodyByRequestURL(requestURL);
            JSONArray jsonArray = jsonService.getJsonArrayByJsonBody(jsonBody);

            // 결과를 담을 리스트 선언
            List<ItemList> resultList;

            // authorizationHeader 를 통해서 토큰 추출하기, 헤더에 토큰이 없거나 토큰이 만료되면 null
            String extractToken = jwtTokenizer.getToken(authorizationHeader);

            // 토큰이 있으면 토큰을 통해 claims 를 가져와서 user 를 찾고 itemList 받아오기
            if(extractToken != null){

                Jws<Claims> claims = jwtTokenizer.getClaimsByToken(extractToken);
                User foundUser = userService.findUser((String) claims.getBody().get("username"));
                resultList = searchService.getItemListFromJsonArrayWithUser(jsonArray, foundUser);

            } else {
                // 토큰이 없다면 user 를 찾을 필요 없어서 찾지 않고 itemList 받아오기
                resultList = searchService.getItemListFromJsonArrayWithoutUser(jsonArray);
            }

            return ResponseEntity.ok().body(resultList);

        } catch (Exception e){
            // 현재까지 처리한 Exception 은 검색한 데이터가 없을 때 뿐임.
            return  ResponseEntity.ok().body("찾으시는 데이터가 존재하지 않습니다.");
        }

    }


    @GetMapping("/{itemName}")
    public ResponseEntity getInfo(@NotNull @PathVariable String itemName,
                                  @Nullable @RequestHeader("Authorization") String authorizationHeader){

        try {
            // request url 만들기
            String requestStringURL = APIServiceImpl.getURLWithEasyDrugAPI(itemName, "json", "100");
            URL requestURL = new URL(requestStringURL);

            // request url 을 통해서 원하는 JSON Object 로 변환시키기
            JSONObject jsonBody = jsonService.getJsonBodyByRequestURL(requestURL);
            JSONArray jsonArray = jsonService.getJsonArrayByJsonBody(jsonBody);

            // 결과를 담을 리스트 선언
            List<Item> resultList;

            // authorizationHeader 를 통해서 토큰 추출하기, 헤더에 토큰이 없거나 토큰이 만료되면 null
            String extractToken = jwtTokenizer.getToken(authorizationHeader);

            // 토큰이 있으면 토큰을 통해 user 를 찾아서 item 리스트 받아오기
            if(extractToken != null){
                Jws<Claims> claims = jwtTokenizer.getClaimsByToken(extractToken);
                User foundUser = userService.findUser((String) claims.getBody().get("username"));

                resultList = searchService.getItemInfoFromJsonArrayWithUser(jsonArray, foundUser, itemName);
            } else {
                // 토큰이 없다면 user 를 찾을 필요 없어서 찾지 않고 item 리스트 받아오기
                resultList = searchService.getItemInfoFromJsonArrayWithoutUser(jsonArray, itemName);
            }

            System.out.println(resultList);

            if (!resultList.isEmpty())
                return ResponseEntity.ok().body(resultList);
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("찾으시는 데이터가 존재하지 않습니다.");
        } catch (Exception e){

            // 현재까지 처리한 Exception 은 검색한 데이터가 없을 때 뿐임.
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("찾으시는 데이터가 존재하지 않습니다.");
        }


    }

}

