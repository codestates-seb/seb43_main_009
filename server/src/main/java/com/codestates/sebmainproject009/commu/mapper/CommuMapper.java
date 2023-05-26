package com.codestates.sebmainproject009.commu.mapper;

import com.codestates.sebmainproject009.comment.dto.CommentResponseDto;
import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.commu.dto.*;
import com.codestates.sebmainproject009.commu.entity.Commu;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface CommuMapper {
    Commu commuPostDtoToCommu(CommuPostDto commuPostDto);
    Commu commuPatchDtoToCommu(CommuPatchDto commuPatchDto);
    CommuResponsesDto commuToCommuResponsesDto(Commu commu);
    CommuImageResponseDto commuToCommuImageResponseDto(Commu commu);

    default CommuResponseDto commuToCommuResponseDto(Commu commu){
        if ( commu == null ) {
            return null;
        }

        Long commuId = null;
        String title = null;
        String content = null;
        LocalDateTime createAt = null;
        int view = 0;
        List<Comment> comments = null;
        Long userId = null;
        String imageUrl = null;
        String userProfileImageUrl = null;

        commuId = commu.getCommuId();
        title = commu.getTitle();
        content = commu.getContent();
        createAt = commu.getCreateAt();
        view = commu.getView();
        List<Comment> list = commu.getComments();
        userId = commu.getUser().getUserId();
        imageUrl = commu.getImageUrl();
        userProfileImageUrl = commu.getUser().getProfileImgUrl();

        if ( list != null ) {
            comments = new ArrayList<Comment>( list );
        }

        String displayName = commu.getUser().getDisplayName();

        CommuResponseDto commuResponseDto = new CommuResponseDto( commuId, title, content, createAt, view, displayName, comments , userId, imageUrl, userProfileImageUrl);


        return commuResponseDto;
    }


    default List<CommuResponsesDto> commuListToCommuResponsesDtoList(List<Commu> commus){
     if ( commus == null ) {
            return null;
        }

        List<CommuResponsesDto> list = new ArrayList<CommuResponsesDto>( commus.size() );
        for ( Commu commu : commus ) {
            list.add(commuToCommuResponsesDto(commu));
            list.get(list.size() - 1).setDisplayName(commu.getUser().getDisplayName());
        }

        return list;
    }

}
