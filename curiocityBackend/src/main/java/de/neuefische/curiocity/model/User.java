package de.neuefische.curiocity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
  private String userId;
  private String firstName;
  private String lastName;
  private String eMail;
  private String gender;
  private String yearOfBirth;
  private String countryOfResidence;
  private String postalCode;
  private String password;
}
