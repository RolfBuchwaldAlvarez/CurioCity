package de.neuefische.curiocity.service;

import de.neuefische.curiocity.db.UserDb;
import de.neuefische.curiocity.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

  public List<User> getUser(String query) {
    return userDb.getUser(query);
  }

  public Optional<User> getUserById(String userId) {
    return userDb.getUserById(userId);
  }

  public Optional<User> deleteUser(String userId) {
    return Optional.of(userDb.deleteUser(userId));
  }

}
