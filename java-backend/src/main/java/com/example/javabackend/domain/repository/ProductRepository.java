package com.example.javabackend.domain.repository;

import com.example.javabackend.domain.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByTitleContainingIgnoreCase(String query, Pageable pageable);

    Page<Product> findByTitleContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(
            String title, String brand, String category, Pageable pageable
    );
}
