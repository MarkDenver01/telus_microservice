package com.example.javabackend.data.mapper;

import com.example.javabackend.data.entity.ProductEntity;
import com.example.javabackend.model.Product;

public class ProductMapper {
    public static Product toDomain(ProductEntity entity) {
        return Product.builder()
                .id(entity.getId())
                .thumbnail(entity.getThumbnail())
                .title(entity.getTitle())
                .brand(entity.getBrand())
                .category(entity.getCategory())
                .price(entity.getPrice())
                .rating(entity.getRating())
                .stock(entity.getStock())
                .shippingInformation(entity.getShippingInformation())
                .build();
    }
}
