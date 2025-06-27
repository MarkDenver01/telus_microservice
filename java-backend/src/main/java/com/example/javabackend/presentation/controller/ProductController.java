package com.example.javabackend.presentation.controller;

import com.example.javabackend.domain.model.ProductRequest;
import com.example.javabackend.domain.service.ProductService;
import com.example.javabackend.dto.PageResponse;
import com.example.javabackend.dto.ProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/public")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/products/page")
    public ResponseEntity<PageResponse<ProductDto>> getProducts(
            @RequestParam(required = false) String query,
            @RequestParam(defaultValue = "0") int age,
            @RequestParam(defaultValue =  "10") int size) {
        Page<ProductDto> result = productService.list(query, age, size);

        PageResponse<ProductDto> response = new PageResponse<>(
                result.getContent(),
                result.getNumber(),
                result.getSize(),
                result.getTotalPages(),
                result.getTotalElements()
        );
        return ResponseEntity.ok(response);
    }

    @PostMapping("/products/add")
    public ResponseEntity<ProductDto> createProduct(@RequestBody ProductRequest productRequest) {
        ProductDto create = productService.save(new ProductDto(
                productRequest.getId(),
                productRequest.getTitle(),
                productRequest.getBrand(),
                productRequest.getCategory(),
                productRequest.getThumbnail(),
                productRequest.getShippingInformation(),
                productRequest.getPrice(),
                productRequest.getRating(),
                productRequest.getStock()
        ));
        return ResponseEntity.ok(create);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<ProductDto>> searchProducts(
            @RequestParam String q,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Page<ProductDto> result = productService.search(q, page, size);
        return ResponseEntity.ok(result);
    }


    @GetMapping("/products")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) {
        return productService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
