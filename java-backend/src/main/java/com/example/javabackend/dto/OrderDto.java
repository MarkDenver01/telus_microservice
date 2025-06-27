package com.example.javabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {
    private String name;
    private String address;
    private String contact;
    private LocalDate deliveryDate;

    private Long productId;
    private String productTitle;
    private Double price;
    private int quantity;
    private Double totalPrice;
}
