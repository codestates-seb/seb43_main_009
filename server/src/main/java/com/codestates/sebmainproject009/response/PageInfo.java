package com.codestates.sebmainproject009.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class PageInfo {

    private int size;
    private int page;
    private int totalElements;
    private int totalPages;
}
