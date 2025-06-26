package com.example.javabackend.domain.service;

import com.example.javabackend.dto.ProductDto;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    Page<ProductDto> list(String query, int page, int size);
    Optional<ProductDto> getById(Long id);
    ProductDto save(ProductDto productDto);
    Page<ProductDto> search(String query, int page, int size);
    List<ProductDto> getAllProducts();
}
