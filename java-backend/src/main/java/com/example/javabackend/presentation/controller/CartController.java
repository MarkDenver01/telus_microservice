package com.example.javabackend.presentation.controller;

import com.example.javabackend.data.repository.CartRepository;
import com.example.javabackend.domain.dto.CartDto;
import com.example.javabackend.domain.dto.CartItemDto;
import com.example.javabackend.domain.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/carts")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @RequestMapping("/{id}")
    public CartDto getCart(@PathVariable Long id) {
        return cartService.getCart(id);
    }

    @PostMapping("/{id}/items/{itemId}")
    public CartDto addCart(@PathVariable Long id, @RequestBody CartItemDto cartItemDto) {
        return cartService.saveCart(id, cartItemDto);
    }

    @DeleteMapping("/{id}/items/{itemId}")
    public void removeCart(@PathVariable Long id, @PathVariable Long itemId) {
        cartService.removeCart(id, itemId);
    }

}
