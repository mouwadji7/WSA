package ca.mouwadji.WSA_testmongiste.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.mouwadji.WSA_testmongiste.model.Employe;
import ca.mouwadji.WSA_testmongiste.model.GestionSoumission;
import ca.mouwadji.WSA_testmongiste.model.Tache;
import ca.mouwadji.WSA_testmongiste.model.Vehicule;
import ca.mouwadji.WSA_testmongiste.repositories.GestionSoumissionRepository;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IAGestionSoumissionService;

import java.util.List;
import java.util.Optional;

@Service
public class GestionSoumissionService implements IAGestionSoumissionService {
    
    private final GestionSoumissionRepository gestionSoumissionRepository;

    @Autowired
    public GestionSoumissionService(GestionSoumissionRepository gestionSoumissionRepository) {
        this.gestionSoumissionRepository = gestionSoumissionRepository;
    }

    @Override
    public GestionSoumission saveGestionSoumission(GestionSoumission gestionSoumission) {
        return gestionSoumissionRepository.save(gestionSoumission);
    }

    @Override
    public GestionSoumission getGestionSoumissionById(Long id) {
        Optional<GestionSoumission> optionalGestionSoumission = gestionSoumissionRepository.findById(id);
        return optionalGestionSoumission.orElse(null);
    }

    @Override
    public List<Tache> getTachesByGestionSoumissionId(Long id) {
        Optional<GestionSoumission> optionalGestionSoumission = gestionSoumissionRepository.findById(id);
        if (optionalGestionSoumission.isPresent()) {
            return optionalGestionSoumission.get().getTaches();
        }
        return null;
    }

    @Override
    public List<Employe> getEmployesByGestionSoumissionId(Long id) {
        Optional<GestionSoumission> optionalGestionSoumission = gestionSoumissionRepository.findById(id);
        if (optionalGestionSoumission.isPresent()) {
            return optionalGestionSoumission.get().getEmployes();
        }
        return null;
    }

    @Override
    public List<Vehicule> getVehiculesByGestionSoumissionId(Long id) {
        Optional<GestionSoumission> optionalGestionSoumission = gestionSoumissionRepository.findById(id);
        if (optionalGestionSoumission.isPresent()) {
            return optionalGestionSoumission.get().getVehicules();
        }
        return null;
    }

    @Override
    public void deleteGestionSoumissionById(Long id) {
        gestionSoumissionRepository.deleteById(id);
    }

}
