package com.example.javabackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping({"/api/java", "/api/java/"})
    public String hello() {
        return "Hello from spring! ";
    }
}
