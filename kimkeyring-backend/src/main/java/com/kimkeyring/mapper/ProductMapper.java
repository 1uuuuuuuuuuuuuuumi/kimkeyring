package com.kimkeyring.mapper;

import com.kimkeyring.entity.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    // 전체 상품 조회
    List<Product> findAll();
}
