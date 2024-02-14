package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.modal.VenueModal;
import com.example.backend.repository.VenueRepo;

@Service
public class VenueService {

    @Autowired
    VenueRepo repo;
    
    public String addData(VenueModal venue)
    {
        repo.save(venue);
        return "Added";
    }
    
    public List<VenueModal> getData(){
        return repo.findAll();
    }

   public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }

    public String updateData(int id, VenueModal updatedVenue) {
        Optional<VenueModal> existingVenueOptional = repo.findById(id);

        if (existingVenueOptional.isPresent()) {
            VenueModal existingVenue = existingVenueOptional.get();
            existingVenue.setImg(updatedVenue.getImg());
            existingVenue.setVenueName(updatedVenue.getVenueName());
            existingVenue.setDetails(updatedVenue.getDetails());

            repo.save(existingVenue);
            return "Updated";
        } else {
            return "Venue not found";
        }
    }   
    
}
