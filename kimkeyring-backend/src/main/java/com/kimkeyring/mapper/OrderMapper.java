package com.kimkeyring.mapper;

import com.kimkeyring.entity.Order;
import com.kimkeyring.entity.OrderItem;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderMapper {

    // orders 테이블에 주문 저장
    void insertOrder(Order order);

    // order_items 테이블에 주문 상품 저장
    void insertOrderItem(OrderItem orderItem);

}
