package com.example.javabackend.domain.service;

import com.example.javabackend.domain.dto.ProductDto;
import org.springframework.data.domain.Page;

public interface ProductService {
    Page<ProductDto> list(String query, int page, int size);
    ProductDto getById(Long id);
    ProductDto save(ProductDto productDto);
}
