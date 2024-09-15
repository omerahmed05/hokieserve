package com.telusko.joblisting.repository;

import com.telusko.joblisting.model.User;

import java.util.List;

public interface SearchRepository {

    List<User> findByText(String text);

}
