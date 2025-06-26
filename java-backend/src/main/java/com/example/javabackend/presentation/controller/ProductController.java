package com.example.javabackend.presentation.controller;

import com.example.javabackend.domain.service.ProductService;
import com.example.javabackend.dto.PageResponse;
import com.example.javabackend.dto.ProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/public")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/products")
    public PageResponse<ProductDto> getProducts(@RequestParam(required = false) String query,
                                                @RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        Page<ProductDto> result = productService.list(
                query, page, size);
        return new PageResponse<>(
                result.getContent(),
                result.getNumber(),
                result.getSize(),
                result.getTotalPages(),
                result.getTotalElements()
        );
    }

    @GetMapping("/products/{id}")
    public Optional<ProductDto> getProductById( @PathVariable Long id) {
        return productService.getById(id);
    }

    @PostMapping("/products/add")
    public ProductDto createProduct(@RequestBody ProductDto dto) {
        return productService.save(dto);
    }

    @GetMapping("/search")
    public Page<ProductDto> searchProduct(@RequestParam String q,
                                          @RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "10") int size) {
        return productService.search(q, page, size);
    }
}
