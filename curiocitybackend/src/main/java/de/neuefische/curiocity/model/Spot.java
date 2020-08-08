package de.neuefische.curiocity.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Spot {
  private String id;
  private double lat;
  private double lng;
  @NotNull
  private String category;
  private String title;
  private String description;
}
