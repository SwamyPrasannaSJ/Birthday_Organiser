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

import com.example.backend.modal.ThemeModal;
import com.example.backend.service.ThemeService;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class ThemeContro {
    
    @Autowired
    ThemeService service;

    @GetMapping("/gettheme")
    public List<ThemeModal> get()
    {
        return service.getData();
    }

    @PostMapping("/posttheme")
    public String add(@RequestBody ThemeModal addion){

        return service.addData(addion);
    }

    @DeleteMapping("/deletetheme/{id}")
    public String delete(@PathVariable int id) {
        service.deleteData(id);
        return "Deleted";
    }

    @PutMapping("/updatetheme/{id}")
    public String update(@PathVariable int id, @RequestBody ThemeModal updatedTheme) {
        service.updateData(id, updatedTheme);
        return "Updated";
    }

}
