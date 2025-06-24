package com.example.javabackend.presentation.service;

import com.example.javabackend.data.repository.ProductRepository;
import com.example.javabackend.domain.dto.ProductDto;
import com.example.javabackend.domain.entity.Product;
import com.example.javabackend.domain.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {

   private final ProductRepository productRepository;

    @Override
    public Page<ProductDto> list(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        Page<Product> productPage = productRepository.findByTitleContainingIgnoreCase(query==null ? "" : query, pageable);
        return productPage.map(product -> new ProductDto(
                product.getId(),
                product.getTitle(),
                product.getBrand(),
                product.getCategory(),
                product.getThumbnail(),
                product.getShippingInformation(),
                product.getPrice(),
                product.getRating(),
                product.getStock()
        ));
    }

    @Override
    public ProductDto getById(Long id) {
        return productRepository.findById(id)
                .map(this::toProductDto)
                .orElse(null);
    }

    @Override
    public ProductDto save(ProductDto productDto) {
        Product product = new Product(null,
                productDto.getTitle(),
                productDto.getBrand(),
                productDto.getCategory(),
                productDto.getThumbnail(),
                productDto.getShippingInformation(),
                productDto.getPrice(),
                productDto.getRating(),
                productDto.getStock()
        );
        return toProductDto(product);
    }

    /**
     *  Map to product.
     * @param product {@link Product}
     * @return {@link ProductDto}
     */
    private ProductDto toProductDto(Product product) {
        return new ProductDto(
                product.getId(),
                product.getTitle(),
                product.getBrand(),
                product.getCategory(),
                product.getThumbnail(),
                product.getShippingInformation(),
                product.getPrice(),
                product.getRating(),
                product.getStock()
        );
    }
}
