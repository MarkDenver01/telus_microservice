package com.example.javabackend.domain.service;

import com.example.javabackend.dto.OrderDto;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {
    void checkout(OrderDto dto);
}
