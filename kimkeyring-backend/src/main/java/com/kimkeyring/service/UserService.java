package com.kimkeyring.service;

import com.kimkeyring.entity.User;
import com.kimkeyring.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    // 비밀번호 암호화 도구
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // 회원가입 (비밀번호 암호화)
    public void registerUser(User user){
        // 원본 비밀번호: "1234"
        String plainPassword = user.getPassword();

        // 암호화: "$2a$37$xo쌸라쌸라..."
        String encodedPassword = passwordEncoder.encode(plainPassword);

        // 암호화된 비밀번호로 변경
        user.setPassword(encodedPassword);

        // DB에 저장 (암호화된 비번으로)
        userMapper.insertUser(user);
    }

    // 로그인
    public User login(String email, String password){
        // 1. 이메일로 사용자 찾기
        User user = userMapper.findByEmail(email);

        if (user == null){
            // 사용자 없음
            return null;
        }

        // 2. 비밀번호 확인
        boolean isPasswordMatch = passwordEncoder.matches(password, user.getPassword());

        if(!isPasswordMatch){
            // 비밀번호 틀림
            return null;
        }

        // 3. 로그인 성공 - 사용자 정보 반환
        return user;
    }

    // 회원 조회 (회원번호로)
    public User getUserById(Long userId){
        return userMapper.findById(userId);
    }

    // 회원 조회 (이메일로) - 로그인용
    public User getUserByEmail(String email){
        return userMapper.findByEmail(email);
    }

    // 회원 정보 수정
    public void updateUser(User user){
        userMapper.updateUser(user);
    }

    // 회원 탈퇴
    public void deleteUser(Long userId){
        userMapper.deleteUser(userId);
    }

    // 비밀번호 확인 (나중에 로그인시 사용)
    public boolean checkPassword(String plainPassword, String encodedPassword){
        return passwordEncoder.matches(plainPassword, encodedPassword);
    }

}
