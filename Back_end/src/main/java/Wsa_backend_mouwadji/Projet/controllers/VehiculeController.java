package Wsa_backend_mouwadji.Projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Wsa_backend_mouwadji.Projet.models.Vehicule;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAVehiculeService;

@RestController
@RequestMapping("/api")
public class VehiculeController {
    
    @Autowired
    private IAVehiculeService vehiculeService;

    @PostMapping("/vehicules/create")
    public Vehicule createVehicule(@RequestBody Vehicule vehicule) {
        return vehiculeService.createVehicule(vehicule);
    }

    @PutMapping("/vehicules/update/{id}")
    public Vehicule updateVehicule(@PathVariable String id, @RequestBody Vehicule vehicule) {
        return vehiculeService.updateVehicule(id, vehicule);
    }

    @PutMapping("/vehicules/{vehiculeId}/addTask/{taskId}")
    public Vehicule addTask(@PathVariable String vehiculeId, @PathVariable String taskId) {
        return vehiculeService.addTask(vehiculeId, taskId);
    }

    @PutMapping("/vehicules/{vehiculeId}/removeTask/{taskId}")
    public Vehicule removeTask(@PathVariable String vehiculeId, @PathVariable String taskId) {
        return vehiculeService.removeTask(vehiculeId, taskId);
    }

    @DeleteMapping("/vehicules/delete/{id}")
    public void deleteVehicule(@PathVariable String id) {
        vehiculeService.deleteVehicule(id);
    }

    @GetMapping("/vehicules/{id}")
    public Vehicule getVehiculeById(@PathVariable String id) {
        return vehiculeService.getVehiculeById(id);
    }

    @GetMapping("/vehicules/all")
    public List<Vehicule> getAllVehicules() {
        return vehiculeService.getAllVehicules();
    }
}
