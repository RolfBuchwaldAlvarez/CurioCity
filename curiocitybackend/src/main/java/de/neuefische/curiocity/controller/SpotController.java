package de.neuefische.curiocity.controller;

import de.neuefische.curiocity.model.Spot;
import de.neuefische.curiocity.model.dto.EditSpotDescriptionDto;
import de.neuefische.curiocity.service.SpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

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

  @PutMapping
  public Spot addSpot(@RequestBody @Valid Spot spot) {
    return spotService.addSpot(spot);
  }

  @PutMapping(path = "{id}/description")
  public Spot editSpotDescription(@RequestBody @Valid EditSpotDescriptionDto editSpotDescriptionDto, @PathVariable String id) {
    Optional<Spot> spotOptional = spotService.editSpotDescription(id, editSpotDescriptionDto.getDescription());
    if (spotOptional.isPresent()) {
      return spotOptional.get();
    }
    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Spot not found");
  }

  @DeleteMapping(path = "{id}")
  public void deleteSpot(@PathVariable String id) {
    if (!spotService.deleteSpot(id)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Spot not found");
    }
  }

}
