package ca.mouwadji.WSA_testmongiste.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.mouwadji.WSA_testmongiste.model.Vehicule;
import ca.mouwadji.WSA_testmongiste.repositories.VehiculeRepository;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IAVehiculeService;

@Service
public class VehiculeService implements IAVehiculeService {
    @Autowired
    private VehiculeRepository vehiculeRepository;

    @Override
    public List<Vehicule> getAllVehicules() {
        return vehiculeRepository.findAll();
    }

    @Override
    public Vehicule getVehiculeById(Long id) {
        Optional<Vehicule> optionalVehicule = vehiculeRepository.findById(id);
        return optionalVehicule.orElse(null);
    }

    @Override
    public Vehicule addVehicule(Vehicule vehicule) {
        return vehiculeRepository.save(vehicule);
    }

    @Override
    public Vehicule updateVehicule(Long id, Vehicule vehicule) {
        vehicule.setId(id);
        return vehiculeRepository.save(vehicule);
    }

    @Override
    public void deleteVehicule(Long id) {
        vehiculeRepository.deleteById(id);
    }
}
