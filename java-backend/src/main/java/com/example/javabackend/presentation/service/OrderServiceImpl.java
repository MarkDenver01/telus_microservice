package com.example.javabackend.presentation.service;

import com.example.javabackend.domain.entity.Order;
import com.example.javabackend.domain.entity.Product;
import com.example.javabackend.domain.repository.OrderRepository;
import com.example.javabackend.domain.repository.ProductRepository;
import com.example.javabackend.domain.service.OrderService;
import com.example.javabackend.dto.OrderDto;
import com.example.javabackend.dto.OrderProductDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Transactional
    @Override
    public void checkout(OrderDto dto) {
        for (OrderProductDto item : dto.getProducts()) {
            Product product = productRepository.findById(item.getProductId())
                    .orElseThrow(() -> new IllegalArgumentException("Product ID not found: " + item.getProductId()));

            if (product.getStock() < item.getQuantity()) throw new IllegalArgumentException("Insufficient stock for product: " + product.getTitle());

            product.setStock(product.getStock() - item.getQuantity());
            productRepository.save(product);


            Order order = Order.builder()
                    .name(dto.getName())
                    .address(dto.getAddress())
                    .contact(dto.getContact())
                    .deliveryDate(dto.getDeliveryDate())
                    .productId(product.getId())
                    .productTitle(product.getTitle())
                    .price(product.getPrice())
                    .quantity(item.getQuantity())
                    .totalPrice(product.getPrice() * item.getQuantity())
                    .build();

            orderRepository.save(order);
        }
    }
}
