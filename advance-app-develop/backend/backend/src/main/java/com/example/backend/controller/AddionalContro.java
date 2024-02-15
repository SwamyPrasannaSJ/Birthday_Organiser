package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.modal.AdditonalModal;
import com.example.backend.service.AddionalService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("*")


public class AddionalContro {

    @Autowired
    AddionalService service;

    @GetMapping("/getaddion")
    public List<AdditonalModal> get()
    {
        return service.getData();
    }

    @PostMapping("/postaddion")
    public String add(@RequestBody AdditonalModal addion){

        return service.addData(addion);
    }

      @DeleteMapping("/deleteaddion/{id}")
    public String delete(@PathVariable int id) {
        return service.deleteData(id);
    }
    
    



    
}
