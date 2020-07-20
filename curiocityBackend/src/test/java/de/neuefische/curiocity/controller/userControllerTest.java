package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class userControllerTest {

  @LocalServerPort
  private int port;

  @Autowired
  private TestRestTemplate restTemplate;

  @Test
  public void getUserShouldReturnAllUsers() {
    //GET
    String url = "http://localhost:" + port + "/api/users";

    //When
    ResponseEntity<User[]> response = restTemplate.getForEntity(url, User[].class);
    HttpStatus statusCode = response.getStatusCode();
    User[] users = response.getBody();

    //Then
    assertEquals(statusCode, HttpStatus.OK);
    assert users != null;
    assertEquals(users[0], new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "23456", "123"));
    assertEquals(users[1], new User("2", "Rene", "Koch", "cde@eMail.de", "male", "1987", "Netherlands", "34567", "345"));
    assertEquals(users[2], new User("3", "Nikita", "Thomson", "bcd@eMail.de", "female", "2002", "Japan", "12345", "234"));
  }

  @Test
  public void getUserWithQueryEqualToOneShouldReturnUserWithIdOne() {
    //GET
    String url = "http://localhost:" + port + "/api/users?q=1";

    //When
    ResponseEntity<User[]> response = restTemplate.getForEntity(url, User[].class);
    HttpStatus statusCode = response.getStatusCode();
    User[] users = response.getBody();

    //Then
    assertEquals(statusCode, HttpStatus.OK);
    assert users != null;
    assertEquals(users[0], new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "23456", "123"));
  }

  @Test
  public void getUserWithQueryEqualToTwoShouldReturnUserWithIdTwo() {
    //GET
    String url = "http://localhost:" + port + "/api/users?q=2";

    //When
    ResponseEntity<User[]> response = restTemplate.getForEntity(url, User[].class);
    HttpStatus statusCode = response.getStatusCode();
    User[] users = response.getBody();

    //Then
    assertEquals(statusCode, HttpStatus.OK);
    assert users != null;
    assertEquals(users[0], new User("2", "Rene", "Koch", "cde@eMail.de", "male", "1987", "Netherlands", "34567", "345"));
  }

  @Test
  public void getUserByLeavingQueryEmptyShouldReturnAllUsers() {
    //GET
    String url = "http://localhost:" + port + "/api/users?q=";

    //When
    ResponseEntity<User[]> response = restTemplate.getForEntity(url, User[].class);
    HttpStatus statusCode = response.getStatusCode();
    User[] users = response.getBody();

    //Then
    assertEquals(statusCode, HttpStatus.OK);
    assert users != null;
    assertEquals(users[0], new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "23456", "123"));
    assertEquals(users[1], new User("2", "Rene", "Koch", "cde@eMail.de", "male", "1987", "Netherlands", "34567", "345"));
    assertEquals(users[2], new User("3", "Nikita", "Thomson", "bcd@eMail.de", "female", "2002", "Japan", "12345", "234"));
  }

  @Test
  public void addUserShouldAddNewUserToUserList() {
    //PUT
    String url = "http://localhost:" + port + "/api/users";
    HttpEntity<User> entity = new HttpEntity<>(new User("4", "Robbi", "Cobain", "def@eMail.de", "male", "2014", "Greece", "45678", "456"));
    ResponseEntity<User> putResponse = restTemplate.exchange(url, HttpMethod.PUT, entity, User.class);
    assertEquals(HttpStatus.OK, putResponse.getStatusCode());
    assertEquals(new User("4", "Robbi", "Cobain", "def@eMail.de", "male", "2014", "Greece", "45678", "456"), putResponse.getBody());

    //When
    ResponseEntity<User[]> response = restTemplate.getForEntity(url, User[].class);
    HttpStatus statusCode = response.getStatusCode();
    User[] users = response.getBody();

    //Then
    assertEquals(statusCode, HttpStatus.OK);
    assert users != null;
    assertEquals(4, users.length);
    assertEquals(users[0], new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "23456", "123"));
    assertEquals(users[1], new User("2", "Rene", "Koch", "cde@eMail.de", "male", "1987", "Netherlands", "34567", "345"));
    assertEquals(users[2], new User("3", "Nikita", "Thomson", "bcd@eMail.de", "female", "2002", "Japan", "12345", "234"));
    assertEquals(users[3], new User("4", "Robbi", "Cobain", "def@eMail.de", "male", "2014", "Greece", "45678", "456"));
  }

  // How to test with Optionals ???

 /* @Test
  public void getUserByIdShouldReturnUserThatBelongsToGivenId() {
    //GET
    String url = "http://localhost:" + port + "/api/users/1";

    //When
    ResponseEntity<User[]> response = restTemplate.getForEntity(url, User[].class);
    HttpStatus statusCode = response.getStatusCode();
    User[] users = response.getBody();

    //Then
    assertEquals(statusCode, HttpStatus.OK);
    assert users != null;
    assertEquals(users[0], new User("1", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "23456", "123"));

  }*/

}