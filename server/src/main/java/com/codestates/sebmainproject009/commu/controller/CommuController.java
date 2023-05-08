package com.codestates.sebmainproject009.commu.controller;

import com.codestates.sebmainproject009.comment.service.CommentService;
import com.codestates.sebmainproject009.commu.dto.CommuPatchDto;
import com.codestates.sebmainproject009.commu.dto.CommuPostDto;
import com.codestates.sebmainproject009.commu.dto.CommuResponseDto;
import com.codestates.sebmainproject009.commu.dto.CommuResponsesDto;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.commu.mapper.CommuMapper;
import com.codestates.sebmainproject009.commu.service.CommuService;
import com.codestates.sebmainproject009.response.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/commu")
@RequiredArgsConstructor
public class CommuController {
    private final CommuService commuService;
    private final CommuMapper mapper;
    private final CommentService commentService;
    private final CommuMapper commentMapper;

    @PostMapping("/posts")
    public ResponseEntity postCommu(@RequestBody CommuPostDto commuPostDto){

        Commu commu = commuService.createCommu(commuPostDto);

        return new ResponseEntity<>(mapper.commuToCommuResponseDto(commu), HttpStatus.CREATED);

    }

    @PatchMapping("/{commuId}")
    public ResponseEntity patchCommu(@PathVariable long commuId,
                                     @RequestBody CommuPatchDto commuPatchDto){

        Commu commu = commuService.updateCommu(mapper.commuPatchDtoToCommu(commuPatchDto));
        return new ResponseEntity<>(mapper.commuToCommuResponseDto(commu), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity getCommuAll(){
        List<Commu> commuList = commuService.findCommuList();
        return new ResponseEntity<>(mapper.commuListToCommuResponsesDtoList(commuList), HttpStatus.OK);
    }


    @GetMapping()
    public ResponseEntity getCommus(@RequestParam(required = false, defaultValue = "1") int page,
                                    @RequestParam(required = false, defaultValue = "6") int size) {
        Page<Commu> commuPage = commuService.findCommus(page - 1, size);
        List<Commu> commuList = commuPage.getContent();

        MultiResponseDto<List<CommuResponsesDto>> multiResponseDto = new MultiResponseDto<>(mapper.commuListToCommuResponsesDtoList(commuList), commuPage);

        return new ResponseEntity<>(multiResponseDto, HttpStatus.OK);

    }

    @GetMapping("/{commuId}")
    public ResponseEntity getCommu(@PathVariable long commuId){
        Commu commu = commuService.findCommu(commuId);

        CommuResponseDto commuResponseDto = mapper.commuToCommuResponseDto(commu);

        commuResponseDto.setComments(commu.getComments());

        return new ResponseEntity<>(commuResponseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{commuId}")
    public ResponseEntity deleteCommu(@PathVariable long commuId){
        commuService.deleteCommu(commuId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
