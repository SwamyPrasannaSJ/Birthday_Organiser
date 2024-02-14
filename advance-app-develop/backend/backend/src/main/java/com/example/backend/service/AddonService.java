package com.example.backend.service;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.Addon;
import com.example.backend.repository.AddonRepo;

@Service
public class AddonService {

    @Autowired
    AddonRepo repo;
    public String addData(Addon modal)
    {
        repo.save(modal);
        return "Added";
    }

    public List<Addon> getData(){
        return repo.findAll();
    } 

    public String deleteData(int id) {
        Optional<Addon> optionalAddon = repo.findById(id);
        if (optionalAddon.isPresent()) {
            repo.deleteById(id);
            return "Deleted";
        } else {
            return "Addon not found";
        }
    }

    public String updateData(int id, Addon addon) {
        Optional<Addon> optionalAddon = repo.findById(id);
        if (optionalAddon.isPresent()) {
            addon.setId(id);
            repo.save(addon);
            return "Updated";
        } else {
            return "Addon not found";
        }
    }

    
}
