package Wsa_backend_mouwadji.Projet.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Wsa_backend_mouwadji.Projet.models.Soumission;
import java.util.List;

@Repository
public interface SoumissionRepository extends MongoRepository<Soumission,String>{
    List<Soumission> findByGerer(boolean gerer);
    Soumission findByReferenceNumber(String referenceNumber);
}
