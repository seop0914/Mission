package com.example.mission.service;

import com.example.mission.domain.TodoDTO;
import com.example.mission.entity.Todo;
import com.example.mission.repository.MemberRepository;
import com.example.mission.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final MemberRepository memberRepository;
    private final TodoRepository todoRepository;

    public List<Todo> viewAll(Long memberId) {
        return todoRepository.findAllByMember(memberRepository.findById(memberId).get());
    }
    public Todo addTodo(TodoDTO todoDTO) {
        Todo todo = todoDTO.toEntity();
        todo.changeMember(memberRepository.findById(todoDTO.getMemberId()).get());
        return todoRepository.save(todo);
    }
    public void deleteTodo(Long todoId) {
        todoRepository.deleteById(todoId);
    }
    public Todo updateTodo(TodoDTO todoDTO) {
        Todo todo = todoDTO.toEntity();
        todo.changeMember(memberRepository.findById(todoDTO.getMemberId()).get());
        return todoRepository.save(todo);
    }
}
