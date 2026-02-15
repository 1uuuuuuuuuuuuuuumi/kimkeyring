package com.kimkeyring.controller;

import com.kimkeyring.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // 주문 생성
    // POST http://localhost:8080/api/orders
    @PostMapping
    public String createOrder(@RequestBody HashMap<String, Object> orderData){

        // OrderService 호출
        orderService.createOrder(orderData);    // 전체 데이터 넘기기

        return "주문이 완료되었습니다.";
    }

}
