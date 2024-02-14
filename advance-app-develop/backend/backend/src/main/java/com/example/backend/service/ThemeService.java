package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.ThemeModal;
import com.example.backend.repository.ThemeRepo;

@Service
public class ThemeService {

    @Autowired
    ThemeRepo repo;

    public String addData(ThemeModal modal)
    {
        repo.save(modal);
        return "Added";
    }

    public List<ThemeModal> getData(){
        return repo.findAll();
    }

    public void deleteData(int id) {
        repo.deleteById(id);
    }

    public String updateData(int id, ThemeModal updatedTheme) {
        Optional<ThemeModal> existingThemeOptional = repo.findById(id);
        
        if (existingThemeOptional.isPresent()) {
            ThemeModal existingTheme = existingThemeOptional.get();
            existingTheme.setImg(updatedTheme.getImg());
            existingTheme.setThemeName(updatedTheme.getThemeName());
            existingTheme.setDetails(updatedTheme.getDetails());
            repo.save(existingTheme);
            return "Updated";
        } else {
            return "Theme not found";
        }
    }
    
}
