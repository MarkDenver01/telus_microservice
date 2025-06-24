package com.example.javabackend.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
@Data
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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
