package Wsa_backend_mouwadji.Projet.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Wsa_backend_mouwadji.Projet.models.Tache;
import Wsa_backend_mouwadji.Projet.repositories.TacheRepository;
import Wsa_backend_mouwadji.Projet.services.IAservice.IATacheService;

import java.util.List;

@Service
public class TacheService implements IATacheService {

    @Autowired
    private TacheRepository tacheRepository;

    @Override
    public Tache createTache(Tache tache) {
        return tacheRepository.save(tache);
    }

    @Override
    public void deleteTache(String id) {
        tacheRepository.deleteById(id);
    }

    @Override
    public Tache updateTache(String id, Tache tache) {
        tache.setId(id);
        return tacheRepository.save(tache);
    }

    @Override
    public Tache getTacheById(String id) {
        return tacheRepository.findById(id).orElse(null);
    }

    @Override
    public List<Tache> getAllTache() {
        return tacheRepository.findAll();
    }

    @Override
    public List<String> getEmployesAssignes(String id) {
        Tache tache = tacheRepository.findById(id).orElse(null);
        if (tache != null) {
            return tache.getEmployesAssignes();
        }
        return null;
    }

    @Override
    public List<String> getVehiculesAssignes(String id) {
        Tache tache = tacheRepository.findById(id).orElse(null);
        if (tache != null) {
            return tache.getVehiculesAssignes();
        }
        return null;
    }
}