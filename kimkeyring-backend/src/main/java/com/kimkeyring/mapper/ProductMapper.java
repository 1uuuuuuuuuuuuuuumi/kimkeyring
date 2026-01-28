package com.kimkeyring.mapper;

import com.kimkeyring.entity.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    // 전체 상품 조회
    List<Product> findAll();

    // 상품 ID로 조회
    Product findById(Long productId);

    // 상품 추가
    void insert(Product product);

    // 상품 수정
    void update(Product product);

    // 상품 삭제
    void delete(Long productId);

}
