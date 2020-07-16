package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class userControllerTest {

  @LocalServerPort
  private int port;

  @Autowired
  private TestRestTemplate restTemplate;

  @Test
  public void getUsersShouldReturnAllUsers() {
    //Given
    String url = "http://localhost:" + port + "/api/users";

    //When
    ResponseEntity<User[]> response = restTemplate.getForEntity(url, User[].class);

    //Then
    assertEquals(response.getStatusCode(), HttpStatus.OK);
    User[] users = response.getBody();
    assert users != null;
    assertEquals(users.length, 2);
    assertEquals(users[0], new User("123abc", "Rolf", "Buchwald", "abc@eMail.de", "male", "1983", "Germany", "50667", "123456"));
    assertEquals(users[1], new User("234bcd", "Nikita", "Thomson", "xyz@gMail.de", "female", "2002", "Japan", "G-123-60", "abcdef"));
  }
}