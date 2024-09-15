package com.telusko.joblisting.controller;

import com.telusko.joblisting.repository.UserRepository;
import com.telusko.joblisting.model.User;
import com.telusko.joblisting.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController
{

    @Autowired
    UserRepository repo;

    @Autowired
    SearchRepository srepo;

    @ApiIgnore
    @RequestMapping(value="/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @GetMapping("/allUsers")
    @CrossOrigin
    public List<User> getAllUsers()
    {
        return repo.findAll();
    }
    // Users/java
    @GetMapping("/Users/{text}")
    @CrossOrigin
    public List<User> search(@PathVariable String text)
    {
        return srepo.findByText(text);
    }

    @PostMapping("/User")
    @CrossOrigin
    public User addUser(@RequestBody User user)
    {
        return repo.save(user);
    }


}
