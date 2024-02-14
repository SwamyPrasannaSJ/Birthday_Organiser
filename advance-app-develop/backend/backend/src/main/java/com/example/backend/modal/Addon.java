package com.example.backend.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="addon")

public class Addon {
    
    @Id
    private int id;
    @Column(name = "number_of_people")
    private int people;
    private String cakeRequire;
    private String duration;
    private String invitation;
    private String date;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getPeople() {
        return people;
    }
    public void setPeople(int people) {
        this.people = people;
    }
    public String getCakeRequire() {
        return cakeRequire;
    }
    public void setCakeRequire(String cakeRequire) {
        this.cakeRequire = cakeRequire;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public String getInvitation() {
        return invitation;
    }
    public void setInvitation(String invitation) {
        this.invitation = invitation;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public Addon() {
    }
    
    
}
