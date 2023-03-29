package com.example.mission.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Member {
    @Id
    @Column(name = "member_id")
    private String id;
    private String password;
    private int age;

    public Member() {
    }

    public Member(String id, String password, int age) {
        this.id = id;
        this.password = password;
        this.age = age;
    }
}
