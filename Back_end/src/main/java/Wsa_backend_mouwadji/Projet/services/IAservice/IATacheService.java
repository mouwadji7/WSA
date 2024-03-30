package Wsa_backend_mouwadji.Projet.services.IAservice;

import Wsa_backend_mouwadji.Projet.models.Tache;
import java.util.List;

public interface IATacheService {
    Tache createTache(Tache tache);
    void deleteTache(String id);
    Tache updateTache(String id, Tache tache);
    Tache getTacheById(String id); // Nouvelle méthode
    List<Tache> getAllTache(); // Nouvelle méthode
    List<String> getEmployesAssignes(String id); // Nouvelle méthode
    List<String> getVehiculesAssignes(String id); // Nouvelle méthode
}
