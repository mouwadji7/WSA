package ca.mouwadji.WSA_testmongiste.service.IAservice;

import ca.mouwadji.WSA_testmongiste.model.Tache;
import java.util.List;

public interface IATacheService {
    
    List<Tache> getAllTaches();

    Tache getTacheById(Long id);

    Tache addTache(Tache tache);

    Tache updateTache(Long id, Tache tache);

    void deleteTache(Long id);
}
