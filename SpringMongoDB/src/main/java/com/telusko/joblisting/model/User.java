package com.telusko.joblisting.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class User {
    private String email;
    private int points;
    private String requests;
    private String solutions;

    public User() {
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPoints() {
        return this.points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public String getRequests() {
        return requests;
    }

    public void setRequests(String requests) {
        this.requests = requests;
    }

    public String getSolutions() {
        return solutions;
    }

    public void setSolutions(String solutions) {
        this.solutions = solutions;
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", points='" + points + '\'' +
                ", requests=" + requests +
                ", solutions=" + solutions +
                '}';
    }
}
