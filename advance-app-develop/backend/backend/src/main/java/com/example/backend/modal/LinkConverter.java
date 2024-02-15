package com.example.backend.modal;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.v3.oas.annotations.links.Link;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class LinkConverter implements AttributeConverter<Link, String> {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(Link link) {
        try {
            return link != null ? objectMapper.writeValueAsString(link) : null;
        } catch (Exception e) {
            throw new RuntimeException("Error converting Link to JSON", e);
        }
    }

    @Override
    public Link convertToEntityAttribute(String linkString) {
        try {
            return linkString != null ? objectMapper.readValue(linkString, Link.class) : null;
        } catch (Exception e) {
            throw new RuntimeException("Error converting JSON to Link", e);
        }
    }
}
