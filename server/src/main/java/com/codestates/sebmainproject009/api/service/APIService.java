package com.codestates.sebmainproject009.api.service;

import java.io.UnsupportedEncodingException;

public interface APIService {
    String getURLWithEasyDrugAPI(String itemName, String type, String numOfRows) throws UnsupportedEncodingException;

    String getURLWithEasyDrugAPI(String itemName, String type) throws UnsupportedEncodingException;
}
