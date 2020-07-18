package de.neuefische.curiocity.service;

import de.neuefische.curiocity.model.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Service // Clears Problem that different objects of same class might be created in controller classes
public class UserService {

  public List<User> userList = new ArrayList<>(List.of(
      new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123"),
      new User("f1", "Rene", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123"),
      new User("2", "Nikita", "Thomson", "bcd@eMail.de", "female", "2002", "Japan", "12345", "234")
  ));

  public User addUser(User user) {
    if(user.getUserId() == null) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "id not set");
    }
    userList.add(user);
    return userList.get(userList.size()-1);
  }

  public List<User> getUsers(String query) {

    if (query == null) {
      return userList;
    }

    List<User> matchingUser = new ArrayList<>();

    for (User user : userList) {
      if(user.getFirstName().toLowerCase().startsWith(query.toLowerCase())) {
        matchingUser.add(user);
      } else if (user.getUserId().toLowerCase().startsWith(query.toLowerCase())) {
        matchingUser.add(user);
      }
    }
    return matchingUser;
    /*throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Student does not exist");*/
  }

}
