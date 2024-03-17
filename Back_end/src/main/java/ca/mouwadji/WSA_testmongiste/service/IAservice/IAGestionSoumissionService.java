package ca.mouwadji.WSA_testmongiste.service.IAservice;

import ca.mouwadji.WSA_testmongiste.model.Employe;
import ca.mouwadji.WSA_testmongiste.model.GestionSoumission;
import ca.mouwadji.WSA_testmongiste.model.Tache;
import ca.mouwadji.WSA_testmongiste.model.Vehicule;
import java.util.List;

public interface IAGestionSoumissionService {
    
    GestionSoumission saveGestionSoumission(GestionSoumission gestionSoumission);

    GestionSoumission getGestionSoumissionById(Long id);

    List<Tache> getTachesByGestionSoumissionId(Long id);

    List<Employe> getEmployesByGestionSoumissionId(Long id);

    List<Vehicule> getVehiculesByGestionSoumissionId(Long id);

    void deleteGestionSoumissionById(Long id);

}
