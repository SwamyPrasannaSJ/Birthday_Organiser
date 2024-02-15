package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.Booking;
import com.example.backend.service.BookingService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth")

public class BookingContro {
    
    @Autowired
    BookingService service;

    @GetMapping("/getbooking")
    public List<Booking> get()
    {
        return service.getData();
    }

    @PostMapping("/postbooking")
    public String add(@RequestBody Booking addion){

        return service.addData(addion);
    }

    @DeleteMapping("/deletebooking/{id}")
    public String delete(@PathVariable int id) {
        service.deleteData(id);
        return "Deleted";
    }

    
}
