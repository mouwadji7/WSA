package Wsa_backend_mouwadji.Projet.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Wsa_backend_mouwadji.Projet.models.Vehicule;

@Repository
public interface VehiculeRepository extends MongoRepository<Vehicule,String>{
    
}
