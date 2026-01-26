package com.kimkeyring.controller;

import com.kimkeyring.entity.Product;
import com.kimkeyring.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductService productService;

    // 전체 상품 조회
    // GET http://localhost:8080/api/products
    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

}
