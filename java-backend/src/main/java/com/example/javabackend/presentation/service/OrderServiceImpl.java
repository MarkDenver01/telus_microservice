package com.example.javabackend.presentation.service;

import com.example.javabackend.domain.entity.Order;
import com.example.javabackend.domain.entity.Product;
import com.example.javabackend.domain.repository.OrderRepository;
import com.example.javabackend.domain.repository.ProductRepository;
import com.example.javabackend.domain.service.OrderService;
import com.example.javabackend.dto.OrderDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Override
    public void checkout(OrderDto dto) {
        Optional<Product> productOpt = productRepository.findById(dto.getProductId());
        if (productOpt.isEmpty()) {
            throw new RuntimeException("Product not found");
        }

        Product product = productOpt.get();
        if (product.getStock() < dto.getQuantity()) {
            throw new RuntimeException("Insufficient stock");
        }

        // decrease stock
        product.setStock(product.getStock() - dto.getQuantity());
        productRepository.save(product);

        // Save order
        Order order = Order.builder()
                .name(dto.getName())
                .address(dto.getAddress())
                .contact(dto.getContact())
                .deliveryDate(dto.getDeliveryDate())
                .productId(dto.getProductId())
                .productTitle(dto.getProductTitle())
                .price(dto.getPrice())
                .quantity(dto.getQuantity())
                .totalPrice(dto.getTotalPrice())
                .build();

        orderRepository.save(order);
    }
}
