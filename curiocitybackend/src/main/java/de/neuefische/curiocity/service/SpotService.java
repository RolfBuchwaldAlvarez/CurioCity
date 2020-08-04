package de.neuefische.curiocity.service;

import de.neuefische.curiocity.db.SpotDb;
import de.neuefische.curiocity.model.Spot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpotService {

  public final SpotDb spotDb;

  @Autowired
  public SpotService(SpotDb spotDb) {
    this.spotDb = spotDb;
  }

  public List<Spot> getGreenSpots() {
    return spotDb.getGreenSpots();
  }

  public List<Spot> getRedSpots() {
    return spotDb.getRedSpots();
  }

  public List<Spot> getBlueSpots() {
    return spotDb.getBlueSpots();
  }

  public List<Spot> getPurpleSpots() {
    return spotDb.getPurpleSpots();
  }

  public List<Spot> getYellowSpots() {
    return spotDb.getYellowSpots();
  }


  public Spot addSpot(Spot spot) {
    return spotDb.addSpot(spot);
  }

  public boolean deleteSpot(String id) {
    return spotDb.deleteSpot(id);
  }

}
