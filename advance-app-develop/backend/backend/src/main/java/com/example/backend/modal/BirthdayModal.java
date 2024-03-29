package com.example.backend.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="birthdaymodal")
public class BirthdayModal {
    
        @Id
        private int id;
        private String eventName;
	    private String img;
	    private String type;
        private int price;
        
        public int getId() {
            return id;
        }
        public void setId(int id) {
            this.id = id;
        }
        public BirthdayModal(int id, String eventName, String img, String type, int price) {
            this.id = id;
            this.eventName = eventName;
            this.img = img;
            this.type = type;
            this.price = price;
        }
        public String getEventName() {
            return eventName;
        }
        public void setEventName(String eventName) {
            this.eventName = eventName;
        }
        public String getImg() {
            return img;
        }
        public void setImg(String img) {
            this.img = img;
        }
        public String getType() {
            return type;
        }
        public void setType(String type) {
            this.type = type;
        }
        public int getPrice() {
            return price;
        }
        public void setPrice(int price) {
            this.price = price;
        }

        public BirthdayModal() {
        }

}
