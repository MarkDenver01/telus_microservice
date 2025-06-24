package com.example.javabackend.presentation.service;

import com.example.javabackend.data.repository.CartRepository;
import com.example.javabackend.domain.dto.CartDto;
import com.example.javabackend.domain.dto.CartItemDto;
import com.example.javabackend.domain.entity.Cart;
import com.example.javabackend.domain.entity.CartItem;
import com.example.javabackend.domain.service.CartService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@RequiredArgsConstructor
@Service
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;

    @Override
    public CartDto getCart(Long id) {
        Cart cart = cartRepository.findById(id).orElseThrow(() ->
                new EntityNotFoundException("cart not found"));
        return toCartDto(cart);
    }

    @Override
    public CartDto saveCart(Long cartId, CartItemDto cartItemDto) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException("cart not found"));
        CartItem cartItem = new CartItem(
                null,
                cartItemDto.getProductId(),
                cartItemDto.getQuantity());
        cart.getCartItems().add(cartItem);
        cartRepository.save(cart);
        return toCartDto(cart);
    }

    @Override
    public void removeCart(Long cartId, Long itemId) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException("cart not found"));
        cart.getCartItems().removeIf(cartItem ->
                cartItem.getId().equals(itemId));
        cartRepository.save(cart);
    }

    private CartDto toCartDto(Cart cart) {
        List<CartItemDto> cartItemList = new ArrayList<>();
        cart.getCartItems()
                .forEach(cartItemDto ->
                        cartItemList.add(new CartItemDto(
                                cartItemDto.getId(),
                                cartItemDto.getProductId(),
                                cartItemDto.getQuantity()
                                )));
        return new CartDto(cart.getId(), cart.getUserId(), cartItemList);
    }
}
