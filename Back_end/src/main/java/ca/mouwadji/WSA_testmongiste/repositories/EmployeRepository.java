package ca.mouwadji.WSA_testmongiste.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ca.mouwadji.WSA_testmongiste.model.Employe;

@Repository
public interface EmployeRepository extends MongoRepository<Employe,Long>{
    
}
