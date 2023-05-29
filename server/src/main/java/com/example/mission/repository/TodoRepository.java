package com.example.mission.repository;


import com.example.mission.entity.Member;
import com.example.mission.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findAllByMember(Member member);
}
