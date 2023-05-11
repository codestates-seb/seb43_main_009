package com.codestates.sebmainproject009.commu.service;

import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.comment.service.CommentService;
import com.codestates.sebmainproject009.commu.dto.CommuPostDto;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.commu.mapper.CommuMapper;
import com.codestates.sebmainproject009.commu.repository.CommuRepository;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.service.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.context.NoSuchMessageException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Setter
@Getter
@RequiredArgsConstructor
public class CommuService {
    private final CommuRepository commuRepository;
    private final CommuMapper mapper;
    private final UserService userService;


    public Commu createCommu(CommuPostDto commuPostDto){
        User user = userService.findVerifiedUser(commuPostDto.getUserId());
        Commu commu = mapper.commuPostDtoToCommu(commuPostDto);

        Commu cratedCommu = commu;
        cratedCommu.setUser(user);

        return commuRepository.save(cratedCommu);
    }

    public Commu updateCommu(Commu commu){
        Commu findCommu = findVerifiedCommu(commu.getCommuId());

        Optional.ofNullable(commu.getTitle())
                .ifPresent(title -> findCommu.setTitle(title));
        Optional.ofNullable(commu.getContent())
                .ifPresent(content -> findCommu.setContent(content));

        return commuRepository.save(findCommu);
    }

    public Commu findCommu(long commuId){
        Commu foundCommu = findVerifiedCommu(commuId);
        foundCommu.setView(foundCommu.getView()+1);

        return commuRepository.save(foundCommu);
    }

    public Page<Commu> findCommus(int page, int size){
        return commuRepository.findAll(PageRequest.of(page, size, Sort.by("commuId").descending()));
    }

    public List<Commu> findCommuList(){
        return commuRepository.findAll();
    }

    public void deleteCommu(long commuId){
        commuRepository.deleteById(commuId);
    }

    public Commu findVerifiedCommu(long commuId){
        Optional<Commu>optionalCommu = commuRepository.findById(commuId);

        return optionalCommu.orElseThrow(()-> new NoSuchMessageException("게시글이 없습니다."));
    }


}