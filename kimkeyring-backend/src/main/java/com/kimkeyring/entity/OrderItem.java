package com.kimkeyring.entity;

public class OrderItem {
    private Long orderItemId;       // 주문 상품 번호 (PK)
    private Long orderId;               // 주문 번호 (FK)
    private Long productId;           // 상품 번호 (FK)
    private Integer quantity;          // 수량
    private Integer price;               // 주문 당시 가격

    // 기본 생성자
    public OrderItem(){}

    // 전체 생성자
    public OrderItem(Long orderItemId, Long orderId, Long productId, Integer quantity, Integer price){
        this.orderItemId = orderItemId;
        this.orderId = orderId;
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }

    // Getter & Setter
    public Long getOrderItemId(){
        return orderItemId;
    }

    public void setOrderItemId(Long orderItemId){
        this.orderItemId = orderItemId;
    }

    public Long getOrderId(){
        return orderId;
    }

    public void setOrderId(Long orderId){
        this.orderId = orderId;
    }

    public Long getProductId(){
        return productId;
    }

    public void setProductId(Long productId){
        this.productId = productId;
    }

    public Integer getQuantity(){
        return quantity;
    }

    public void setQuantity(Integer quantity){
        this.quantity = quantity;
    }

    public Integer getPrice(){
        return price;
    }

    public void setPrice(Integer price){
        this.price = price;
    }
}
