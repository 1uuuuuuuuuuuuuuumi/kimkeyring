package com.kimkeyring.entity;

import java.time.LocalDateTime;

public class User {
    private Long userId;    // 회원번호 (Primary Key)
    private String email;   // 이메일 (로그인 ID)
    private String password;    // 비밀번호
    private String name;    // 이름
    private String phone;   // 전화번호
    private LocalDateTime createdAt;    // 가입일
}