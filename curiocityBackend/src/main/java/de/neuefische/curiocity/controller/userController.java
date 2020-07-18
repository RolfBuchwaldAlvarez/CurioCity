package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class userController {

  public List<User> userList = new ArrayList<>(List.of(
      new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123"),
      new User("f1", "Rene", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123"),
      new User("2", "Nikita", "Thomson", "bcd@eMail.de", "female", "2002", "Japan", "12345", "234")
  ));

  @GetMapping
  // Wenn required = true, dann muss ein Parameter in der URI angegeben werden!
  public List<User> getUsers(@RequestParam(name="q", required = false) String query) {

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

  @PutMapping // Funzt mit List = List.of( new User...); nicht. Warum? -> s. oben
  public User addUser(@RequestBody User user) {
    if(user.getUserId() == null) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "id not set");
    }
    userList.add(user);
    return userList.get(userList.size()-1);
  }

  @GetMapping("{userId}")
  public User getUserById(@PathVariable String userId) {
    for (User user : userList) {
      if(user.getUserId().equals(userId)) {
        return user;
      }
    }
    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Student does not exist");
  }

  @DeleteMapping("{userId}")
  public User deleteUser(@PathVariable String userId) {
        User userToBeRemoved = getUserById(userId);
        userList.remove(userToBeRemoved);
        return userToBeRemoved;
  }

}
