package com.example.javabackend.presentation.controller;

import com.example.javabackend.domain.service.OrderService;
import com.example.javabackend.dto.OrderDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/orders/checkout")
    public ResponseEntity<String> checkout(@RequestBody OrderDto dto) {
        orderService.checkout(dto);
        return ResponseEntity.ok("Checkout success");
    }
}
