package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.User;
import de.neuefische.curiocity.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

  // UserService-class object now managed by Spring through @Service annotation
  private final UserService userService;

  @Autowired // Must be added to Constructor
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  // Wenn required = true, dann muss ein Parameter in der URI angegeben werden!
  public List<User> getUsers(@RequestParam(name="q", required = false) String query) {
    return userService.getUsers(query);
  }

  @PutMapping // Funzt mit List = List.of( new User...); nicht. Warum? -> s. oben (gelöst)
  public User addUser(@RequestBody User user) {
    return userService.addUser(user);
  }

  @GetMapping("{userId}")
  public User getUserById(@PathVariable String userId) {
    return userService.getUserById(userId);
  }

  @DeleteMapping("{userId}")
  public User deleteUser(@PathVariable String userId) {
        return userService.deleteUser(userId);
  }

}
