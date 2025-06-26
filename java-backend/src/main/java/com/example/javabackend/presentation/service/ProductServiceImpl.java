package com.example.javabackend.presentation.service;

import com.example.javabackend.domain.entity.Product;
import com.example.javabackend.domain.repository.ProductRepository;
import com.example.javabackend.domain.service.ProductService;
import com.example.javabackend.dto.ProductDto;
import com.example.javabackend.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public Page<ProductDto> list(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort
                .by("id").descending());
        return productRepository
                .findByTitleContainingIgnoreCase(query == null ? "" : query,
                        pageable)
                .map(new Function<Product, ProductDto>() {
                    @Override
                    public ProductDto apply(Product product) {
                        return ProductMapper.toDto(product);
                    }
                });
    }

    @Override
    public Optional<ProductDto> getById(Long id) {
        return productRepository.findById(id)
                .map(new Function<>() {
                    @Override
                    public ProductDto apply(Product product) {
                        return ProductMapper.toDto(product);
                    }
                });
    }

    @Override
    public ProductDto save(ProductDto productDto) {
        return ProductMapper.toDto(productRepository.save(ProductMapper.toEntity(productDto)));
    }

    @Override
    public Page<ProductDto> search(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size,
                Sort.by("id").descending());

        String qStr = query.isEmpty() ? "" : query;

        Page<Product> productPage = productRepository
                .findByTitleContainingIgnoreCaseOrBrandContainingIgnoreCaseOrCategoryContainingIgnoreCase(
                            qStr, qStr, qStr, pageable);

        return productPage.map(new Function<Product, ProductDto>() {
            @Override
            public ProductDto apply(Product product) {
                return ProductMapper.toDto(product);
            }
        });
    }

    @Override
    public List<ProductDto> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(new Function<Product, ProductDto>() {
                    @Override
                    public ProductDto apply(Product product) {
                        return ProductMapper.toDto(product);
                    }
                }).collect(Collectors.toList());
    }
}
