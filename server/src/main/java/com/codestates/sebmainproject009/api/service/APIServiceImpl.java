package com.codestates.sebmainproject009.api.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;


@Service
public class APIServiceImpl implements APIService {

    @Value("${serviceKey}")
    private String serviceKeyEasyDrug;

    private StringBuilder urlBuilder;

    @Override
    public String getURLWithEasyDrugAPI(String itemName, String type, String numOfRows) throws UnsupportedEncodingException {

        urlBuilder = new StringBuilder("http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList");

        urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + serviceKeyEasyDrug);
        urlBuilder.append("&" + URLEncoder.encode("itemName", "UTF-8")+ "=" + URLEncoder.encode(itemName, "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("type", "UTF-8") + "=" + URLEncoder.encode(type, "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode(numOfRows, "UTF-8"));

        return urlBuilder.toString();
    }
    @Override
    public String getURLWithEasyDrugAPI(String itemName, String type) throws UnsupportedEncodingException {

        urlBuilder = new StringBuilder("http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList");

        urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + serviceKeyEasyDrug);
        urlBuilder.append("&" + URLEncoder.encode("itemName", "UTF-8")+ "=" + URLEncoder.encode(itemName, "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("type", "UTF-8") + "=" + URLEncoder.encode(type, "UTF-8"));

        return urlBuilder.toString();
    }
}
