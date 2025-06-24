package com.example.javabackend.domain.service;

import com.example.javabackend.domain.dto.CartDto;
import com.example.javabackend.domain.dto.CartItemDto;

public interface CartService {
    CartDto getCart(Long id);
    CartDto saveCart(Long cartId, CartItemDto cartItemDto);

    void removeCart(Long cartId, Long itemId);
}
