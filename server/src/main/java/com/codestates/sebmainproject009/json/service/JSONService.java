package com.codestates.sebmainproject009.json.service;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URISyntaxException;
import java.net.URL;

@Service
public class JSONService {

    public JSONObject getJsonBodyByRequestURL(URL requestURL) throws URISyntaxException {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(requestURL.toURI(), String.class);

        String responseBody = responseEntity.getBody();

        JSONObject jsonObject = new JSONObject(responseBody);

        return jsonObject.getJSONObject("body");
    }

    public JSONArray getJsonArrayByJsonBody(JSONObject jsonBody) {

        JSONArray jsonArray;

        try{
            jsonArray = jsonBody.getJSONArray("items");
        }catch (JSONException exception){
            return  null;
        }
        return jsonArray;
    }
}
