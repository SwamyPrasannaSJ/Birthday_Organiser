package com.example.backend.modal;

import java.sql.Date;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String venue;
    private String theme;
    private String additionalRequirements;
    private int numberOfPeople;
    private String cakeRequirement;
    private String duration;
    private String invitationRequirements;
    private String date;

    // @OneToOne(mappedBy = "booking")
    // private VenueModal ven;

    
    public Long getId() {
    return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getVenue() {
        return venue;
    }


    public void setVenue(String venue) {
        this.venue = venue;
    }


    public String getTheme() {
        return theme;
    }


    public void setTheme(String theme) {
        this.theme = theme;
    }


    public String getAdditionalRequirements() {
        return additionalRequirements;
    }


    public void setAdditionalRequirements(String additionalRequirements) {
        this.additionalRequirements = additionalRequirements;
    }


    public int getNumberOfPeople() {
        return numberOfPeople;
    }


    public void setNumberOfPeople(int numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }


    public String getCakeRequirement() {
        return cakeRequirement;
    }


    public void setCakeRequirement(String cakeRequirement) {
        this.cakeRequirement = cakeRequirement;
    }


    public String getDuration() {
        return duration;
    }


    public void setDuration(String duration) {
        this.duration = duration;
    }


    public String getInvitationRequirements() {
        return invitationRequirements;
    }


    public void setInvitationRequirements(String invitationRequirements) {
        this.invitationRequirements = invitationRequirements;
    }


    public String getDate() {
        return date;
    }


    public void setDate(String date) {
        this.date = date;
    }


    public Booking() {
    }

    
    
}
