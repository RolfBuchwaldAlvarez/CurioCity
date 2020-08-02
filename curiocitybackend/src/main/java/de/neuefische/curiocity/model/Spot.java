package de.neuefische.curiocity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Spot {
  private String spotID;
  private String lat;
  private String lng;
  /*private String category;
  private String description;
  private String timeStamp;*/
}
