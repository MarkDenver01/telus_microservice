package com.example.javabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
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
