package com.example.mission.domain;

import com.example.mission.entity.Todo;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
public class TodoDTO {
    private Long id;
    private String title;
    private String content;
    private boolean complete;

    public Todo toEntity() {
        return Todo.builder()
                .id(id)
                .title(title)
                .content(content)
                .complete(complete)
                .build();
    }
}
