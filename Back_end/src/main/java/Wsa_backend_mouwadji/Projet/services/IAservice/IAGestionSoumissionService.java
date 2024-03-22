package Wsa_backend_mouwadji.Projet.services.IAservice;

import Wsa_backend_mouwadji.Projet.models.GestionSoumission;
import Wsa_backend_mouwadji.Projet.models.Soumission;
import Wsa_backend_mouwadji.Projet.models.Tache;

public interface IAGestionSoumissionService {
    
    GestionSoumission createGestionSoumission(GestionSoumission gestionSoumission);
    void deleteGestionSoumission(String id);
    GestionSoumission updateGestionSoumission(String id, GestionSoumission gestionSoumission);
    void updateTache(String id, Tache tache);
    void updateSoumission(String id, Soumission soumission);
    GestionSoumission getGestionSoumissionById(String id);
    List<GestionSoumission> getGestionSoumissionAll();
}
