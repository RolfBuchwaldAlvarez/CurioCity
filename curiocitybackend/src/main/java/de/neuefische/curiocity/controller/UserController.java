package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.User;
import de.neuefische.curiocity.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

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
  public List<User> getUser(@RequestParam(name = "q", required = false) String query) {
    return userService.getUser(query);
  }

  @PutMapping // Funzt mit List = List.of( new User...); nicht. Warum? -> s. oben (gelöst)
  public User addUser(@RequestBody User user) {
    return userService.addUser(user);
  }

  @GetMapping("{userId}")
  public User getUserById(@PathVariable String userId) {

    Optional<User> userById = userService.getUserById(userId);
    if (userById.isEmpty()) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }
    return userById.get();
  }

  @DeleteMapping("{userId}")
  public void deleteUser(@PathVariable String userId) {
    if (!userService.deleteUser(userId)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found");
    }
  }

}
