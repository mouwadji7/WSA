package ca.mouwadji.WSA_testmongiste.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.mouwadji.WSA_testmongiste.model.Tache;
import ca.mouwadji.WSA_testmongiste.repositories.TacheRepository;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IATacheService;

import java.util.List;
import java.util.Optional;

@Service
public class TacheService implements IATacheService{
    
    @Autowired
    private TacheRepository tacheRepository;

    @Override
    public List<Tache> getAllTaches() {
        return tacheRepository.findAll();
    }

    @Override
    public Tache getTacheById(Long id) {
        Optional<Tache> optionalTache = tacheRepository.findById(id);
        return optionalTache.orElse(null);
    }

    @Override
    public Tache addTache(Tache tache) {
        return tacheRepository.save(tache);
    }

    @Override
    public Tache updateTache(Long id, Tache tache) {
        tache.setId(id);
        return tacheRepository.save(tache);
    }

    @Override
    public void deleteTache(Long id) {
        tacheRepository.deleteById(id);
    }

}
