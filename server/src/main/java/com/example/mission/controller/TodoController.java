package com.example.mission.controller;

import com.example.mission.entity.Todo;
import com.example.mission.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoRepository todoRepository;

    @GetMapping("/todo")
    public List<Todo> getTodoAll() {
        return todoRepository.findAll();
    }

    @GetMapping("/todo/add")
    public void addTodo() {
        Todo todo1 = new Todo("제목1", "내용1", true);
        Todo todo2 = new Todo("제목2", "내용2", false);
        Todo todo3 = new Todo("제목3", "내용3", false);
        Todo todo4 = new Todo("제목4", "내용4", true);

        todoRepository.save(todo1);
        todoRepository.save(todo2);
        todoRepository.save(todo3);
        todoRepository.save(todo4);
    }
}
