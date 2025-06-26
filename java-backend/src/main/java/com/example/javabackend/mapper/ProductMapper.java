package com.example.javabackend.mapper;

import com.example.javabackend.domain.entity.Product;
import com.example.javabackend.dto.ProductDto;

public class ProductMapper {
    public static ProductDto toDto(Product product) {
        return new ProductDto(
                product.getId(),
                product.getTitle(),
                product.getBrand(),
                product.getCategory(),
                product.getThumbnail(),
                product.getShippingInformation(),
                product.getPrice(),
                product.getRating(),
                product.getStock()
        );
    }

    public static Product toEntity(ProductDto dto) {
        return new Product(
                dto.getId(),
                dto.getTitle(),
                dto.getBrand(),
                dto.getCategory(),
                dto.getThumbnail(),
                dto.getShippingInformation(),
                dto.getPrice(),
                dto.getRating(),
                dto.getStock()
        );
    }
}
