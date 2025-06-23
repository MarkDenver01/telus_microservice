package com.example.javabackend.presentation.controller;

import com.example.javabackend.domain.usecase.ProductService;
import com.example.javabackend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/java/products")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private ProductService productService;

    public Map<String, Object> getAllProducts(
            @RequestParam(defaultValue = "0") int skip,
            @RequestParam(defaultValue = "30") int limit
    ) {
        Page<Product> page = productService.getAll(skip, limit);
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("products", page.getContent());
        responseData.put("total", page.getTotalElements());
        responseData.put("skip", skip);
        responseData.put("limit", limit);
        return responseData;
    }

    @GetMapping("/products/search")
    public Map<String, Object> searchProducts(
            @RequestParam String query,
            @RequestParam(defaultValue = "0") int skip,
            @RequestParam(defaultValue = "30") int limit
    ) {
        Page<Product> page = productService.search(query, skip, limit);
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("products", page.getContent());
        responseData.put("total", page.getTotalElements());
        responseData.put("skip", skip);
        responseData.put("limit", limit);
        return responseData;
    }
}
