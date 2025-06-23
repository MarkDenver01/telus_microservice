package com.example.javabackend.data.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
