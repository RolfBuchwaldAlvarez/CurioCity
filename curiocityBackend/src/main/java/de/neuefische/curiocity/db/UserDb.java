package de.neuefische.curiocity.db;

import de.neuefische.curiocity.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class UserDb {
  public List<User> userList = new ArrayList<>(List.of(
      new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123"),
      new User("2", "Rene", "Koch", "abc@eMail.de", "male", "1983", "Germany", "50667", "123"),
      new User("3", "Nikita", "Thomson", "bcd@eMail.de", "female", "2002", "Japan", "12345", "234")
  ));

  public User addUser(User user) {
    if (user.getUserId() == null) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "id not set");
    }
    userList.add(user);
    return userList.get(userList.size() - 1);
  }

  public List<User> getUserByQuery(String query) {
    if (query == null) {
      return userList;
    } else {

      List<User> matchingUser = new ArrayList<>();

      for (User user : userList) {
        if (user.getFirstName().toLowerCase().startsWith(query.toLowerCase())) {
          matchingUser.add(user);
        } else if (user.getUserId().toLowerCase().startsWith(query.toLowerCase())) {
          matchingUser.add(user);
        }
      }
      return matchingUser;
    }
  }

  public Optional<User> getUserById(String userId) {
    for (User user : userList) {
      if (user.getUserId().equals(userId)) {
        return Optional.of(user);
      }
    }
    return Optional.empty();
  }

  public User deleteUser(String userId) {
    Optional<User> userOptional = getUserById(userId);
    if (userOptional.isEmpty()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found");
    } else {
      userList.remove(userOptional.get());
    }
    return userOptional.get();
  }

}