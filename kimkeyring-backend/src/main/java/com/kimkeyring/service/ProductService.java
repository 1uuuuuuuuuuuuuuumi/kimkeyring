package com.kimkeyring.service;

import com.kimkeyring.entity.Product;
import com.kimkeyring.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    // 전체 상품 조회
    public List<Product> getAllProducts(){
        return productMapper.findAll();
    }

    // 상품 ID로 조회
    public Product getProductById(Long productId){
        return productMapper.findById(productId);
    }

    // 상품 추가
    public void addProduct(Product product){
        productMapper.insert(product);
    }

    // 상품 수정
    public void updateProduct(Product product){
        productMapper.update(product);
    }

    // 상품 삭제
    public void deleteProduct(Long productId){
        productMapper.delete(productId);
    }

}
