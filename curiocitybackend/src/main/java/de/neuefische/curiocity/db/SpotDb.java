package de.neuefische.curiocity.db;

import de.neuefische.curiocity.model.Spot;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class SpotDb {
  public List<Spot> spotList = new ArrayList<>(List.of(
      new Spot("1", "bar", 50.936400, 6.947340, "Public Square" /*, "Famous public square in Cologne, Germany", "160170.26499999338"*/),
      new Spot("2", "restaurant", 50.947460, 6.959180, "Cathedral" /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/),
      new Spot("3", "random", 50.947420, 6.950160, "Cathedral" /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/),
      new Spot("4", "concert", 50.947440, 6.952140, "Cathedral" /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/),
      new Spot("5", "store", 50.936600, 6.954120, "Cathedral" /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/),
      new Spot("6", "concert", 50.939460, 6.956100, "Cathedral" /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/)
  ));

  public List<Spot> getSpots() {
    return spotList;
  }

  public Spot addSpot(Spot spot) {
    spot.setId(UUID.randomUUID().toString());
    spotList.add(spot);
    return spotList.get(spotList.size() - 1);
  }

  public Optional<Spot> editSpotDescription(String id, String description) {
    Optional<Spot> spotOptional = getSpotById(id);
    if (spotOptional.isEmpty()) {
      return Optional.empty();
    }
    Spot spot = spotOptional.get();
    spot.setDescription(description);
    return Optional.of(spot);
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
