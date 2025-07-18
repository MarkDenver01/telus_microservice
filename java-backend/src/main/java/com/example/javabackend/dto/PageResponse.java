package com.example.javabackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResponse<T> {
    private List<T> dataList;
    private int page;
    private int size;
    private int totalPages;
    private long totalElements;
}
