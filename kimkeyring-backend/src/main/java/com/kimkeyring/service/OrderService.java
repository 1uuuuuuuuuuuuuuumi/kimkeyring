package com.kimkeyring.service;

import com.kimkeyring.entity.Order;
import com.kimkeyring.entity.OrderItem;
import com.kimkeyring.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {

    @Autowired
    private OrderMapper orderMapper;

    // 주문 생성 - 학습차원으로 !!
    public void createOrder(HashMap<String, Object> orderData) {
        // 1. Order 데이터 파싱
        Long userId = Long.valueOf(orderData.get("userId").toString());
        Integer totalPrice = (Integer) orderData.get("totalPrice");
        String address = (String) orderData.get("address");
        String addressDetail = (String) orderData.get("addressDetail");

        // 2. Order 객체 생성
        Order order = new Order();
        order.setUserId(userId);
        order.setTotalPrice(totalPrice);
        order.setStatus("PENDING");     // 기본값: 대기중
        order.setAddress(address);
        order.setAddressDetail(addressDetail);

        // 3. orders 테이블에 저장
        orderMapper.insertOrder(order);

        // 4. 생성된 orderId 가져오기 (자동 생성된 PK)
        Long orderId = order.getOrderId();

        // 5. items 리스트 파싱
        List<Map<String, Object>> items = (List<Map<String, Object>>) orderData.get("items");

        // 6. 각 아이템을 order_items 테이블에 저장
        for (Map<String, Object> itemData : items  ){
            Long productId = Long.valueOf(itemData.get("productId").toString());
            Integer quantity = (Integer) itemData.get("quantity");
            Integer price = (Integer) itemData.get("price");

            OrderItem orderItem = new OrderItem();
            orderItem.setOrderId(orderId);
            orderItem.setProductId(productId);
            orderItem.setQuantity(quantity);
            orderItem.setPrice(price);

            orderMapper.insertOrderItem(orderItem);
        }
    }
}
