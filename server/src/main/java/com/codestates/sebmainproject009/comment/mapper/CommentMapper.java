package com.codestates.sebmainproject009.comment.mapper;

import com.codestates.sebmainproject009.comment.dto.CommentPostDto;
import com.codestates.sebmainproject009.comment.dto.CommentResponseDto;
import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.commu.dto.CommuResponsesDto;
import com.codestates.sebmainproject009.commu.entity.Commu;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);
    default CommentResponseDto commentToCommentResponseDto(Comment comment){
        if ( comment == null ) {
            return null;
        }

        CommentResponseDto commentResponseDto = new CommentResponseDto();

        commentResponseDto.setCommentId( comment.getCommentId() );
        commentResponseDto.setComment( comment.getComment() );
        commentResponseDto.setDisplayName( comment.getUser().getDisplayName() );
        commentResponseDto.setCreateAt( comment.getCreateAt() );

        return commentResponseDto;
    }
    List<CommentResponseDto> commentListToCommentResponsesDtoList(List<Comment> comments);
}
