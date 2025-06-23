package com.example.javabackend.domain.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {
    private Long id;
    private String thumbnail;
    private String title;
    private String brand;
    private String category;
    private double price;
    private double rating;
    private int stock;
    private String shippingInformation;
}
