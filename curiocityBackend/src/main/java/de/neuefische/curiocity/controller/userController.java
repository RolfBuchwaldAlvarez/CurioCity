package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class userController {

  public List<User> userList = List.of(
      new User("123abc", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123456"),
      new User("234bcd", "Nikita", "Thomson", "xyz@gMail.de", "female", "2002", "Japan", "G-123-60", "abcdef")
  );

  @GetMapping
  public List<User> getUsers() {
    return userList;
  }

}
