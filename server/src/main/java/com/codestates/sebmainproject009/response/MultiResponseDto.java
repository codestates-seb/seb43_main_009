package com.codestates.sebmainproject009.response;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

@Getter
@Setter
public class MultiResponseDto<T> {
    private T data;
    private PageInfo pageInfo;

    public MultiResponseDto(T data, Page page){
        this.data = data;
        this.pageInfo = new PageInfo(page.getSize(), page.getNumber()+1,
                (int)page.getTotalElements(), page.getTotalPages());
    }
}
