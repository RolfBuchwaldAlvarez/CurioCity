package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.Spot;
import de.neuefische.curiocity.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/purpleSpots")
public class PurpleSpotController {

  private final SpotService spotService;

  @Autowired
  public PurpleSpotController(SpotService spotService) {
    this.spotService = spotService;
  }

  @GetMapping
  public List<Spot> getPurpleSpots() {
    return spotService.getPurpleSpots();
  }

  @PutMapping
  public Spot addSpot(@RequestBody Spot spot) {
    return spotService.addSpot(spot);
  }

  @DeleteMapping
  public void deleteSpot(@RequestBody Spot spot) {
    String id = spot.getId();
    if (!spotService.deleteSpot(id)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Spot not found");
    }
  }

}