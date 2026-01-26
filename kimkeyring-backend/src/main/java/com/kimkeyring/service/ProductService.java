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

}
