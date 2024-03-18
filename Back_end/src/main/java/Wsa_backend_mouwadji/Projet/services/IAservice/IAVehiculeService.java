package Wsa_backend_mouwadji.Projet.services.IAservice;

import java.util.List;

import Wsa_backend_mouwadji.Projet.models.Vehicule;

public interface IAVehiculeService {
    Vehicule createVehicule(Vehicule vehicule);
    Vehicule updateVehicule(String id, Vehicule vehicule);
    Vehicule addTask(String vehiculeId, String taskId);
    Vehicule removeTask(String vehiculeId, String taskId);
    void deleteVehicule(String id);
    Vehicule getVehiculeById(String id);
    List<Vehicule> getAllVehicules();
    List<String> getTasks(String vehiculeId);
}
