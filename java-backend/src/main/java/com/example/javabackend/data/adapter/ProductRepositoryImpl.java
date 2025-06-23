package com.example.javabackend.data.adapter;

import com.example.javabackend.data.entity.ProductEntity;
import com.example.javabackend.data.mapper.ProductMapper;
import com.example.javabackend.data.repository.JpaProduceRepository;
import com.example.javabackend.domain.port.ProductRepository;
import com.example.javabackend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.function.Function;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    @Autowired
    private JpaProduceRepository jpaProduceRepository;

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return jpaProduceRepository
                .findAll(pageable)
                .map(new Function<ProductEntity, Product>() {
                    @Override
                    public Product apply(ProductEntity productEntity) {
                        return ProductMapper.toDomain(productEntity);
                    }
                });
    }

    @Override
    public Page<Product> search(String query, Pageable pageable) {
        return jpaProduceRepository
                .search(query, pageable)
                .map(new Function<ProductEntity, Product>() {
                    @Override
                    public Product apply(ProductEntity productEntity) {
                        return ProductMapper.toDomain(productEntity);
                    }
                });

    }
}
