package com.kimkeyring.entity;

import java.time.LocalDateTime;

public class Order {
    private Long orderId;                           // 주문 번호 (PK)
    private Long userId;                             // 회원 번호 (FK)
    private Integer totalPrice;                    // 총 주문 금액
    private String status;                            // 주문 상태
    private LocalDateTime createdAt;     // 주문 일시
    private String address;                        // 배송지 주소
    private String addressDetail;              // 배송지 상세 주소

    // 기본 생성자
    public Order(){}

    // 전체 생성자
    public Order(Long orderId, Long userId, Integer totalPrice, String status, LocalDateTime createdAt, String address, String addressDetail){
        this.orderId = orderId;
        this.userId = userId;
        this.totalPrice = totalPrice;
        this.status = status;
        this.createdAt = createdAt;
        this.address = address;
        this.addressDetail = addressDetail;
    }

    // Getter & Setter
    public Long getOrderId(){
        return orderId;
    }

    public void setOrderId(Long orderId){
        this.orderId = orderId;
    }

    public Long getUserId(){
        return userId;
    }

    public void setUserId(Long userId){
        this.userId = userId;
    }

    public Integer getTotalPrice(){
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice){
        this.totalPrice = totalPrice;
    }

    public String getStatus(){
        return status;
    }

    public void setStatus(String status){
        this.status = status;
    }

    public LocalDateTime getCreatedAt(){
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt){
        this.createdAt = createdAt;
    }

    public String getAddress(){
        return address;
    }

    public void  setAddress(String address){
        this.address = address;
    }

    public String getAddressDetail(){
        return addressDetail;
    }

    public void setAddressDetail(String addressDetail){
        this.addressDetail = addressDetail;
    }
}
