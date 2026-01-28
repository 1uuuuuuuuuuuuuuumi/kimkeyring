package com.kimkeyring.controller;

import com.kimkeyring.entity.Product;
import com.kimkeyring.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // 상품 ID로 조회
    // GET http://localhost:8080/api/products/1
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

    // 상품 추가
    // POST http://localhost:8080/api/products
    @PostMapping
    public String addProduct(@RequestBody Product product){
        productService.addProduct(product);
        return "상품이 추가되었습니다.";
    }

    // 상품 수정
    // PUT http://localhost:8080/api/products/1
    @PutMapping("/{id}")
    public String updateProduct(@PathVariable Long id, @RequestBody Product product){
        product.setProductId(id);
        productService.updateProduct(product);
        return "상품이 수정되었습니다.";
    }

    // 상품 삭제
    // DELETE http://localhost:8080/api/products/1
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
        return "상품이 삭제되었습니다.";
    }

}
