package com.example.javabackend;

import com.example.javabackend.model.Product;
import com.example.javabackend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JavaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ProductRepository repo) {
        return args -> {
            repo.save(Product.builder()
                    .title("Sample Product")
                    .brand("BrandX")
                    .category("Tech")
                    .price(999.99)
                    .rating(4.5)
                    .stock(10)
                    .shippingInformation("Ships in 3-5 days")
                    .thumbnail("")
                    .build());
        };
    }

}
