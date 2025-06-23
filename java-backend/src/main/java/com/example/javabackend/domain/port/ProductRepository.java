package com.example.javabackend.domain.port;

import com.example.javabackend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductRepository {
    Page<Product> findAll(Pageable pageable);

    Page<Product> search(String query, Pageable pageable);

}
