package com.kimkeyring.mapper;

import com.kimkeyring.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    // 회원가입
    void insertUser(User user);
}
