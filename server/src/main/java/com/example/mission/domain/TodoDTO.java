package com.example.mission.domain;

import com.example.mission.entity.Member;
import com.example.mission.entity.Todo;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
public class TodoDTO {
    private Long todoId;
    private String todoTitle;
    private String todoContent;
    private Boolean todoComplete;
    private Long memberId;

    public Todo toEntity() {
        return Todo.builder()
                .todoId(todoId)
                .todoTitle(todoTitle)
                .todoContent(todoContent)
                .todoComplete(todoComplete)
                .build();
    }
    public TodoDTO(Todo todo) {
        todoId = todo.getTodoId();
        todoTitle = todo.getTodoTitle();
        todoContent = todo.getTodoContent();
        todoComplete = todo.isTodoComplete();
        memberId = todo.getMember().getMemberId();
    }
}
