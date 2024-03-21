package Wsa_backend_mouwadji.Projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Wsa_backend_mouwadji.Projet.models.Vehicule;
import Wsa_backend_mouwadji.Projet.repositories.VehiculeRepository;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAVehiculeService;

@Service
public class VehiculeService implements IAVehiculeService {
    @Autowired
    private VehiculeRepository vehiculeRepository;

    @Override
    public Vehicule createVehicule(Vehicule vehicule) {
        return vehiculeRepository.save(vehicule);
    }

    @Override
    public Vehicule updateVehicule(String id, Vehicule vehicule) {
        vehicule.setId(id);
        return vehiculeRepository.save(vehicule);
    }

    @Override
    public Vehicule addTask(String vehiculeId, String taskId) {
        Vehicule vehicule = vehiculeRepository.findById(vehiculeId).orElse(null);
        if (vehicule != null) {
            vehicule.getTachesAssignes().add(taskId);
            return vehiculeRepository.save(vehicule);
        }
        return null;
    }

    @Override
    public Vehicule removeTask(String vehiculeId, String taskId) {
        Vehicule vehicule = vehiculeRepository.findById(vehiculeId).orElse(null);
        if (vehicule != null) {
            vehicule.getTachesAssignes().remove(taskId);
            return vehiculeRepository.save(vehicule);
        }
        return null;
    }

    @Override
    public void deleteVehicule(String id) {
        vehiculeRepository.deleteById(id);
    }

    @Override
    public Vehicule getVehiculeById(String id) {
        return vehiculeRepository.findById(id).orElse(null);
    }

    @Override
    public List<Vehicule> getAllVehicules() {
        return vehiculeRepository.findAll();
    }

    @Override
    public List<String> getTasks(String vehiculeId) {
        Vehicule vehicule = vehiculeRepository.findById(vehiculeId).orElse(null);
        if (vehicule != null) {
            return vehicule.getTachesAssignes();
        }
        return null;
    }
}