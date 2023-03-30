package com.example.mission.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String content;
    private boolean complete;

    public Todo(){}
    public Todo(String title, String content, boolean complete) {
        this.title = title;
        this.content = content;
        this.complete = complete;
    }
}
