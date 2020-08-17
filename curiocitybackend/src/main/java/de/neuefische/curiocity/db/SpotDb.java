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
      new Spot("1", 50.931703598464416, 6.945654865653639, "bar", "Ichigo's Sakura Highballs", "Crowded place with colorful drinks. Waiters are dressed up like cosplay actors." /*, "Famous public square in Cologne, Germany", "160170.26499999338"*/),
      new Spot("2", 50.9282459667188, 6.948878468670161, "restaurant", "Naruto's Ramen & Teishoku", "Awesome looking Japanese style place with sexy food selection. Can't wait to try the super yummy looking homemade ramen soups." /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/),
      new Spot("3", 50.93138721286788, 6.948732405506957, "random", "Kyoto Square", "Cool looking public square with BBQ areas and lots of arty stuff all over the place."/*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/),
      new Spot("4", 50.925302901958354, 6.961510016974253, "concert", "AKB48", "Akihabara 48 coming from Tokyo to Cologne for a small boutique concert in January 2021. Tickets on Sale from November 2020. Need to get tickets!" /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/),
      new Spot("5", 50.92458994653566, 6.958419380082241, "store", "Tanjirou's Manga Book Shop", "Seems like they're having quite a bunch of original Japanese mangas on stock." /*, "Famous cathedral in Cologn, Germany", "396984.1299999971"*/)
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
