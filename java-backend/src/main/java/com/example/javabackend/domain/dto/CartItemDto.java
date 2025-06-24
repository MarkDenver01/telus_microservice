package com.example.javabackend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CartItemDto {
    private Long id;
    private Long productId;
    private Integer quantity;
}
