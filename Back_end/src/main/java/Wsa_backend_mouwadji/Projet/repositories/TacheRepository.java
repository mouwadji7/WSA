package Wsa_backend_mouwadji.Projet.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Wsa_backend_mouwadji.Projet.models.Tache;

@Repository
public interface TacheRepository extends MongoRepository<Tache,String>{
    
}
