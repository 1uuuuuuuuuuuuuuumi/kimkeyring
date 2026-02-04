package com.kimkeyring.mapper;

import com.kimkeyring.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    // 회원가입
    void insertUser(User user);

    // 회원 ID로 조회
    User findById(Long userId);

    // 이메일로 조회 (로그인 시 사용)
    User findByEmail(String email);

    // 회원 정보 수정
    void updateUser(User user);

    // 회원 탈퇴
    void deleteUser(Long userId);
}
