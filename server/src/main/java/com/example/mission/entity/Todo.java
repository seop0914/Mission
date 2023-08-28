package com.example.mission.entity;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "todo")
@NoArgsConstructor
public class Todo extends Date {
    @Id
    @GeneratedValue
    private Long todoId;
    @NotNull
    private String todoTitle;
    @NotNull
    private String todoContent;
    @NotNull
    private Boolean todoComplete;

    @JoinColumn(name = "memberId")
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    public void changeMember(Member member) {
        this.member = member;
    }

    @Builder
    public Todo(Long todoId, String todoTitle, String todoContent, Boolean todoComplete) {
        this.todoId = todoId;
        this.todoTitle = todoTitle;
        this.todoContent = todoContent;
        this.todoComplete = todoComplete;
    }
}
