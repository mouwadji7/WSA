package ca.mouwadji.WSA_testmongiste.service.IAservice;

import ca.mouwadji.WSA_testmongiste.model.Vehicule;
import java.util.List;

public interface IAVehiculeService {
    
    
    List<Vehicule> getAllVehicules();

    Vehicule getVehiculeById(Long id);

    Vehicule addVehicule(Vehicule vehicule);

    Vehicule updateVehicule(Long id, Vehicule vehicule);

    void deleteVehicule(Long id);
}
