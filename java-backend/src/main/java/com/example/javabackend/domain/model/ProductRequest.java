package com.example.javabackend.domain.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProductRequest {
    private Long id;
    private String title;
    private String brand;
    private String category;
    private String thumbnail;
    private String shippingInformation;
    private Double price;
    private Double rating;
    private Integer stock;
}
