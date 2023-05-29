package com.example.mission.controller;

import com.example.mission.domain.MemberDTO;
import com.example.mission.domain.TodoDTO;
import com.example.mission.entity.Member;
import com.example.mission.entity.Todo;
import com.example.mission.repository.TodoRepository;
import com.example.mission.service.MemberService;
import com.example.mission.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;
    private final MemberService memberService;

    @GetMapping("/todo")
    public List<Todo> getTodoAll(@RequestParam Long memberId) {
        return todoService.viewAll(memberId);
    }

    @PutMapping("/todo/add")
    public Todo addTodo(@RequestBody TodoDTO todoDTO) {
        return todoService.addTodo(todoDTO);
    }
    @DeleteMapping("/todo/delete/{todoId}")
    public void deleteTodo(@PathVariable Long todoId){
        todoService.deleteTodo(todoId);
    }
    @PutMapping("/todo/update")
    public Todo updateTodo(@RequestBody TodoDTO todoDTO) {
        return todoService.updateTodo(todoDTO);
    }
}
