package ca.mouwadji.WSA_testmongiste.controllers;

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

import ca.mouwadji.WSA_testmongiste.model.Vehicule;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IAVehiculeService;

@RestController
@RequestMapping("/api/vehicules")
public class VehiculeController {

    @Autowired
    private IAVehiculeService vehiculeService;

    @GetMapping("/api/vehicules")
    public List<Vehicule> getAllVehicules() {
        return vehiculeService.getAllVehicules();
    }

    @GetMapping("/api/vehicules/{id}")
    public Vehicule getVehiculeById(@PathVariable Long id) {
        return vehiculeService.getVehiculeById(id);
    }

    @PostMapping("/api/vehicules")
    public Vehicule addVehicule(@RequestBody Vehicule vehicule) {
        return vehiculeService.addVehicule(vehicule);
        //post url=http://localhost:8080/api/vehicules
    }

    @PutMapping("/api/vehicules/{id}")
    public Vehicule updateVehicule(@PathVariable Long id, @RequestBody Vehicule vehicule) {
        return vehiculeService.updateVehicule(id, vehicule);
    }

    @DeleteMapping("/api/vehicules/{id}")
    public void deleteVehicule(@PathVariable Long id) {
        vehiculeService.deleteVehicule(id);
    }


    
}
