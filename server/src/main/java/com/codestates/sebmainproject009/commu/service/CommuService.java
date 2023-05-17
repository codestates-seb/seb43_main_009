package com.codestates.sebmainproject009.commu.service;

import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.comment.repository.CommentRepository;
import com.codestates.sebmainproject009.commu.dto.CommuPostDto;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.commu.mapper.CommuMapper;
import com.codestates.sebmainproject009.commu.repository.CommuRepository;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.service.UserService;
import lombok.Getter;
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
public class CommuService {
    private final CommuRepository commuRepository;
    private final CommuMapper mapper;
    private final UserService userService;

    private final CommentRepository commentRepository;

    public CommuService(CommuRepository commuRepository, CommuMapper mapper, UserService userService, CommentRepository commentRepository) {
        this.commuRepository = commuRepository;
        this.mapper = mapper;
        this.userService = userService;
        this.commentRepository = commentRepository;
    }


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
        Commu foundCommu = findVerifiedCommu(commuId);
        List<Comment> commentList = foundCommu.getComments();
        for(Comment comment : commentList){
            commentRepository.delete(comment);
        }

        commuRepository.deleteById(commuId);
    }

    public Commu findVerifiedCommu(long commuId){
        Optional<Commu>optionalCommu = commuRepository.findById(commuId);

        return optionalCommu.orElseThrow(()-> new NoSuchMessageException("게시글이 없습니다."));
    }


    public boolean isSameWriter(Long userId, long commuId) {
        Commu foundCommu = findVerifiedCommu(commuId);
        Long writerId = foundCommu.getUser().getUserId();
        return writerId.equals(userId);
    }


    public Commu createCommuCustom(String title, String content, String imageUrl,Long userId) {

        User user = userService.findVerifiedUser(userId);
        Commu commu =new Commu();
        commu.setTitle(title);
        commu.setContent(content);
        commu.setUser(user);
        commu.setImageUrl(imageUrl);

        return commuRepository.save(commu);
    }
}