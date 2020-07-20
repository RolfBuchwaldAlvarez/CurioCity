package de.neuefische.curiocity.db;

import de.neuefische.curiocity.model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserDbTest {

  UserDb userDb = new UserDb();

  @Test
  public void addUserShouldAddNewUserToUserListAndReturnNewUser() {
    //Given
    User newUser = new User("4", "Robbi", "Cobain", "def@eMail.de", "male", "2014", "Greece", "45678", "456");

    //When
    User testUser = userDb.addUser(newUser);

    //Then
    assertEquals(new User("4", "Robbi", "Cobain", "def@eMail.de", "male", "2014", "Greece", "45678", "456"), testUser);
  }

  // How to test ResponseStatusExceptions ???

/*  @Test
  public void addUserShouldThrowResponseStatusExceptionIfIdIsMissing() {
    //Given
    UserDb newUserDb = new UserDb();
    User newUser = new User("", "Robbi", "Cobain", "def@eMail.de", "male", "2014", "Greece", "45678", "456");

    //When
    ResponseStatusException exception = new ResponseStatusException(HttpStatus.BAD_REQUEST, "id not set");

    //Then
    assertEquals(newUserDb.addUser(newUser),exception);

  }*/

}