package com.kimkeyring.controller;

import com.kimkeyring.entity.Order;
import com.kimkeyring.entity.OrderItem;
import com.kimkeyring.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
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

    // 내 주문 목록 조회
    // GET http://localhost:8080/api/orders?userId=2
    @GetMapping
    public List<Order> getMyOrders(@RequestParam Long userId){
        return orderService.getOrdersByUserId(userId);
    }

    // 주문 상세 조회
    // GET http://localhost:8080/api/orders/1
    @GetMapping("/{orderId}")
    public Map<String, Object> getOrderDetail(@PathVariable Long orderId){
        Order order = orderService.getOrderById(orderId);
        List<OrderItem> items = orderService.getOrderItems(orderId);

        // 주문 정보 + 주문 상품들을 함께 반환
        Map<String, Object> result = new HashMap<>();
        result.put("order", order);
        result.put("items", items);

        return result;
    }

}
