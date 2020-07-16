package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class userController {

  public List<User> userList = new ArrayList<>();
      /*List.of(
      new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123"),
      new User("2", "Nikita", "Thomson", "bcd@eMail.de", "female", "2002", "Japan", "12345", "234")
  )*/

  @GetMapping
  public List<User> getUsers() {
    return userList;
  }

  @PutMapping // Funzt mit List = List.of( new User...); nicht. Warum?
  public User addUser(@RequestBody User user) {
    userList.add(user);
    return userList.get(userList.size()-1);
  }

  @GetMapping("{id}")
  public User getUserById(@PathVariable String id) {
    for (User user : userList) {
      if(user.getUserId().equals(id)) {
        return user;
      }
    }
    return null;
  }

}
