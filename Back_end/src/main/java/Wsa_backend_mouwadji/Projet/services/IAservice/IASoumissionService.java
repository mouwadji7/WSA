package Wsa_backend_mouwadji.Projet.services.IAservice;

import Wsa_backend_mouwadji.Projet.models.Soumission;

import java.util.List;

public interface IASoumissionService {
    Soumission createSoumission(Soumission soumission);
    void deleteSoumission(String id);
    Soumission updateSoumission(String id, Soumission soumission);
    Soumission getSoumissionById(String id);
    Soumission getSoumissionByReferenceNumber(String referenceNumber);
    List<Soumission> getAllSoumissions();
    List<Soumission> getNonGeresSoumissions();
    List<Soumission> getGeresSoumissions();
}
