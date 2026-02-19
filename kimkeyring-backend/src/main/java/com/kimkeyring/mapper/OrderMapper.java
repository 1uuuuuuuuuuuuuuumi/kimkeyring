package com.kimkeyring.mapper;

import com.kimkeyring.entity.Order;
import com.kimkeyring.entity.OrderItem;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {

    // orders 테이블에 주문 저장
    void insertOrder(Order order);

    // order_items 테이블에 주문 상품 저장
    void insertOrderItem(OrderItem orderItem);


    // === 조회 메서드 ===
    // 특정 사용자의 모든 주문 조회
    List<Order> findByUserId(Long userId);

    // 주문 ID로 주문 상세 조회
    Order findById(Long orderId);

    // 특정 주문의 주문 상품 목록 조회
    List<OrderItem> findItemsByOrderId(Long orderId);
}
