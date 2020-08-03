package de.neuefische.curiocity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Spot {
  private String id;
  private double lat;
  private double lng;
  /*private String category;
  private String description;
  private String timeStamp;*/
}
