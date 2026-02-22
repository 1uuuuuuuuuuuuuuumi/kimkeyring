package com.kimkeyring.dto;

import java.time.LocalDateTime;
import java.util.List;

public class OrderHistoryDTO {
    // Order 정보
    private Long orderId;
    private Long userId;
    private Integer totalPrice;
    private String status;
    private String address;
    private String addressDetail;
    private LocalDateTime createdAt;

    // 주문 상품 목록 (상품 정보 포함)
    private List<OrderItemDTO> items;

    // 기본 생성자
    public OrderHistoryDTO(){}

    // Getter & Setter
    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddressDetail() {
        return addressDetail;
    }

    public void setAddressDetail(String addressDetail) {
        this.addressDetail = addressDetail;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<OrderItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDTO> items) {
        this.items = items;
    }
}
