package com.example.mission.service;

import com.example.mission.domain.TodoDTO;
import com.example.mission.entity.Todo;
import com.example.mission.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    public List<Todo> viewAll() {
        return todoRepository.findAll();
    }
    public Todo addTodo(TodoDTO todoDTO) {
        return todoRepository.save(todoDTO.toEntity());
    }
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
    public Todo updateTodo(TodoDTO todoDTO) {
        return todoRepository.save(todoDTO.toEntity());
    }
}
