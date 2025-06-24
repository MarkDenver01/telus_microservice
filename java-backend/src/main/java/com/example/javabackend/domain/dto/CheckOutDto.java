package com.example.javabackend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CheckOutDto {
    private Long id;
    private String name;
    private String address;
    private String contactNumber;
    private Date deliveryDateRange;

}
