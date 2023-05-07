package com.example.mission.entity;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "TODO")
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String content;
    @NotNull
    private boolean complete;

    @Builder
    public Todo(Long id, String title, String content, boolean complete) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.complete = complete;
    }
}
