package com.example.mission.controller;

import com.example.mission.entity.Todo;
import com.example.mission.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/todo/add")
    public Todo addTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }
    @DeleteMapping("/todo/delete/{id}")
    public void deleteTodo(@PathVariable Long id){
        todoRepository.deleteById(id);
    }
    @PutMapping("/todo/update")
    public Todo updateTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }
}
