package com.example.javabackend.data.repository;

import com.example.javabackend.data.entity.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

public interface JpaProduceRepository extends JpaRepository<ProductEntity, Long> {
    @Query("SELECT p FROM ProductEntity p WHERE " +
            "LOWER(p.title) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
            "LOWER(p.brand) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
            "LOWER(p.category) LIKE LOWER(CONCAT('%', :query, '%'))")
    Page<ProductEntity> search(String query, Pageable pageable);
}
