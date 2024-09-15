package com.telusko.joblisting.repository;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.telusko.joblisting.model.User;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Component
public class SearchRepositoryImpl implements SearchRepository{

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;

    @Override
    public List<User> findByText(String text) {

        final List<User> users = new ArrayList<>();

        MongoDatabase database = client.getDatabase("HokieServe");
        MongoCollection<Document> collection = database.getCollection("Users");

        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
        new Document("text", 
        new Document("query", text)
                    .append("path", Arrays.asList("email", "requests", "solutions"))))));

        result.forEach(doc -> users.add(converter.read(User.class,doc)));

        return users;
    }
}
