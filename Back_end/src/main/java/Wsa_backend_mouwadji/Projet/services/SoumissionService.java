package Wsa_backend_mouwadji.Projet.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Wsa_backend_mouwadji.Projet.models.Soumission;
import Wsa_backend_mouwadji.Projet.repositories.SoumissionRepository;
import Wsa_backend_mouwadji.Projet.services.IAservice.IASoumissionService;
import java.util.List;

@Service
public class SoumissionService implements IASoumissionService{
    
    @Autowired
    private SoumissionRepository soumissionRepository;

    @Override
    public Soumission createSoumission(Soumission soumission) {
        soumission.setGerer(false); // Initialiser le booléen gerer à false
        return soumissionRepository.save(soumission);
    }

    @Override
    public void deleteSoumission(String id) {
        soumissionRepository.deleteById(id);
    }

    @Override
    public Soumission updateSoumission(String id, Soumission soumission) {
        soumission.setId(id);
        return soumissionRepository.save(soumission);
    }
    @Override
    public Soumission getSoumissionById(String id) {
        return soumissionRepository.findById(id).orElse(null);
    }

    @Override
    public Soumission getSoumissionByReferenceNumber(String referenceNumber) {
        return soumissionRepository.findByReferenceNumber(referenceNumber);
    }
    
    @Override
    public List<Soumission> getAllSoumissions() {
        return soumissionRepository.findAll();
    }

    @Override
    public List<Soumission> getNonGeresSoumissions() {
        return soumissionRepository.findByGerer(false);
    }

    @Override
    public List<Soumission> getGeresSoumissions() {
        return soumissionRepository.findByGerer(true);
    }

}