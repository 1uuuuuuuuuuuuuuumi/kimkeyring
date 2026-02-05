package com.kimkeyring.controller;

import com.kimkeyring.entity.User;
import com.kimkeyring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    // 회원가입
    // POST http://localhost:8080/api/users
    @PostMapping
    public String registerUser(@RequestBody User user){
        userService.registerUser(user);
        return "회원가입이 완료되었습니다.";
    }

    // 회원 조회 (ID)
    // GET http://localhost:8080/api/users/1
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    // 회원 조회 (이메일)
    // GET http://localhost:8080/api/users/email/kim@gmail.com
    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable String email){
        return userService.getUserByEmail(email);
    }

    // 회원 정보 수정
    // PUT http://localhost:8080/api/users/1
    @PutMapping("/{id}")
    public String updateUser(@PathVariable Long id, @RequestBody User user){
        user.setUserId(id);
        userService.updateUser(user);
        return "회원 정보가 수정되었습니다.";
    }

    // 회원 탈퇴
    // DELETE http://localhost:8080/api/users/1
    public String deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return "회원 탈퇴가 완료되었습니다.";
    }

}
