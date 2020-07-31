package de.neuefische.curiocity.db;

import de.neuefische.curiocity.model.Spot;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class SpotDb {
  public List<Spot> spotList = new ArrayList<>(List.of(
      new Spot("1", "50.936400", "6.947340", "Public Square", "Famous public square in Cologne, Germany", "160170.26499999338"),
      new Spot("2", "50.947460", "6.959180", "Cathedral", "Famous cathedral in Cologn, Germany", "396984.1299999971")
  ));

  public List<Spot> getSpots() {
    if (spotList != null) {
      return spotList;
    } else {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No spots found!");
    }
  }

  public Spot addSpot(Spot spot) {
    if (spot.getSpotID().equals("")) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Spot-ID not set");
    }
    spotList.add(spot);
    return spotList.get(spotList.size() - 1);
  }

  public boolean deleteSpot(String spotId) {
    Optional<Spot> spotOptional = getSpotById(spotId);
    if (spotOptional.isEmpty()) {
      return false;
    }
    return spotList.remove(spotOptional.get());
  }

}
