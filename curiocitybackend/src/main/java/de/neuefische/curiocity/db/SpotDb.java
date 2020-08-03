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
      new Spot("1", "bar", 50.936400, 6.947340/*, "Public Square", "Famous public square in Cologne, Germany", "160170.26499999338"*/),
      new Spot("2", "restaurant", 50.947460, 6.959180/*, "Cathedral", "Famous cathedral in Cologn, Germany", "396984.1299999971"*/)
  ));

  public List<Spot> getGreenSpots() {
    if (spotList != null) {
      List<Spot> greenSpotList = new ArrayList<>();
      for (Spot spot : spotList) {
        if (spot.getCategory().equals("restaurant")) {
          greenSpotList.add(spot);
        }
      }
      return greenSpotList;
    } else {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No spots found!");
    }
  }

  public List<Spot> getRedSpots() {
    if (spotList != null) {
      List<Spot> redSpotList = new ArrayList<>();
      for (Spot spot : spotList) {
        if (spot.getCategory().equals("bar")) {
          redSpotList.add(spot);
        }
      }
      return redSpotList;
    } else {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No spots found!");
    }
  }

  public Spot addSpot(Spot spot) {
    if (spot.getId().equals("")) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Spot-ID not set");
    }
    spotList.add(spot);
    return spotList.get(spotList.size() - 1);
  }

  public boolean deleteSpot(String id) {
    Optional<Spot> spotOptional = getSpotById(id);
    if (spotOptional.isEmpty()) {
      return false;
    }
    return spotList.remove(spotOptional.get());
  }

  public Optional<Spot> getSpotById(String id) {
    for (Spot spot : spotList) {
      if (spot.getId().equals(id)) {
        return Optional.of(spot);
      }
    }
    return Optional.empty();
  }

}
