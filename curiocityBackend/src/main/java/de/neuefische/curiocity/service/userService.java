package de.neuefische.curiocity.service;

import de.neuefische.curiocity.db.UserDb;
import de.neuefische.curiocity.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service // Clears Problem that different objects of same class might be created in controller classes
public class UserService {

  public final UserDb userDb;

  @Autowired
  public UserService(UserDb userDb) {
    this.userDb = userDb;
  }

  public User addUser(User user) {
    return userDb.addUser(user);
  }

  public List<User> getUsers(String query) {
    return userDb.getUser(query);
      }

  public User getUserById(String userId) {
    return userDb.getUserById(userId);
  }

  public User deleteUser(String userId) {
    return userDb.deleteUser(userId);
  }

}
