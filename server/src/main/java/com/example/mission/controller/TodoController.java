package com.example.mission.controller;

import com.example.mission.domain.TodoDTO;
import com.example.mission.entity.Todo;
import com.example.mission.repository.TodoRepository;
import com.example.mission.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/todo")
    public List<Todo> getTodoAll() {
        return todoService.viewAll();
    }

    @PutMapping("/todo/add")
    public Todo addTodo(@RequestBody TodoDTO todoDTO) {
        return todoService.addTodo(todoDTO);
    }
    @DeleteMapping("/todo/delete/{id}")
    public void deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
    }
    @PutMapping("/todo/update")
    public Todo updateTodo(@RequestBody TodoDTO todoDTO) {
        return todoService.updateTodo(todoDTO);
    }
}
