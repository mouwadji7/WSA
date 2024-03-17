package ca.mouwadji.WSA_testmongiste.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import ca.mouwadji.WSA_testmongiste.model.Soumission;

@Repository
public interface SoumissionRepository extends MongoRepository<Soumission,Long>{
    Soumission findByReferenceNum(String referenceNumber);
    List<Soumission> findSoumissionsByGestionSoumissionIsNull();
    List<Soumission> findSoumissionsByGestionSoumissionIsNotNull();
}
