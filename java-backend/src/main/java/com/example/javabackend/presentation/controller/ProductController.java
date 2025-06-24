package com.example.javabackend.presentation.controller;

import com.example.javabackend.domain.dto.ProductDto;
import com.example.javabackend.domain.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public Page<ProductDto> getAllProducts(@RequestParam(required = false) String query,
                                           @RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "10") int size) {
        return productService.list(query, page, size);
    }

    @GetMapping("/{id}")
    public ProductDto getProductById(@PathVariable Long id) { return productService.getById(id);}

    @PostMapping
    public ProductDto createProduct(@RequestBody ProductDto productDto) { return productService.save(productDto); }
}
