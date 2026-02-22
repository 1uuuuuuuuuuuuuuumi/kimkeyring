package com.kimkeyring.dto;

public class OrderItemDTO {
    // OrderItem 정보
    private Long orderItemId;
    private Long orderId;
    private Long productId;
    private Integer quantity;
    private Integer price;

    // Product 정보 (JOIN으로 가져올꺼)
    private String productName;
    private String productImageUrl;

    // 기본 생성자
    public OrderItemDTO(){}

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

    public String getProductName(){
        return productName;
    }

    public void setProductName(String productName){
        this.productName = productName;
    }

    public String getProductImageUrl(){
        return productImageUrl;
    }

    public void setProductImageUrl(String productImageUrl){
        this.productImageUrl = productImageUrl;
    }
}
