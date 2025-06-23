package com.example.javabackend.domain.usecase;

import com.example.javabackend.domain.port.ProductRepository;
import com.example.javabackend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Page<Product> getAll(int skip, int limit) {
        PageRequest pageRequest = PageRequest.of(skip / limit, limit);
        return productRepository.findAll(pageRequest);
    }

    public Page<Product> search(String query, int skip, int limit) {
        PageRequest pageRequest = PageRequest.of(skip / limit, limit);
        return productRepository.findAll(pageRequest);
    }
}
