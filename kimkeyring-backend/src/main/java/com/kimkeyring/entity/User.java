package com.kimkeyring.entity;

import java.time.LocalDateTime;

public class User {
    private Long userId;    // 회원번호 (Primary Key)
    private String email;   // 이메일 (로그인 ID)
    private String password;    // 비밀번호
    private String name;    // 이름
    private String phone;   // 전화번호
    private LocalDateTime createdAt;    // 가입일

    // 기본 생성자
    public User(Long userId, String email, String password, String name, String phone, LocalDateTime createdAt){
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.createdAt = createdAt;
    }

    // Getter/Setter
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}