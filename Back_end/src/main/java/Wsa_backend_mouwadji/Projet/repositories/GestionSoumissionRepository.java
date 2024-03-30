package Wsa_backend_mouwadji.Projet.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Wsa_backend_mouwadji.Projet.models.GestionSoumission;

@Repository
public interface GestionSoumissionRepository extends MongoRepository<GestionSoumission,String> {
    GestionSoumission findBySoumissionId(String soumissionId);
}
