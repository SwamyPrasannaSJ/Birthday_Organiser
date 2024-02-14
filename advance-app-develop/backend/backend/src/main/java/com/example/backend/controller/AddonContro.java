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

import com.example.backend.modal.Addon;
import com.example.backend.service.AddonService;

@RestController
@RequestMapping("/api/v1/auth")
// @CrossOrigin("*")


public class AddonContro {
    
    @Autowired
    AddonService service;

    @GetMapping("/getaddon")
    public List<Addon> get()
    {
        return service.getData();
    }

    @PostMapping("/postaddon")
    public String add(@RequestBody Addon addion){

        return service.addData(addion);
    }

    @DeleteMapping("/deleteaddon/{id}")
    public String delete(@PathVariable int id) {
        return service.deleteData(id);
    }

    @PutMapping("/updateaddon/{id}")
    public String update(@PathVariable int id, @RequestBody Addon addon) {
        return service.updateData(id, addon);
    }

}
