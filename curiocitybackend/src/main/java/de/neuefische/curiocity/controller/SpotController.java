package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.Spot;
import de.neuefische.curiocity.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/spots")
public class SpotController {

  private final SpotService spotService;

  @Autowired
  public SpotController(SpotService spotService) {
    this.spotService = spotService;
  }

  @GetMapping
  public List<Spot> getSpots() {
    return spotService.getSpots();
  }

}
