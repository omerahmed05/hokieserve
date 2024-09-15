package com.telusko.joblisting.repository;

import com.telusko.joblisting.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String>
{

}
