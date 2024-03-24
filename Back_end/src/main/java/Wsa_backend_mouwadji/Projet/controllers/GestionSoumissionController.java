package Wsa_backend_mouwadji.Projet.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Wsa_backend_mouwadji.Projet.models.GestionSoumission;
import Wsa_backend_mouwadji.Projet.models.Soumission;
import Wsa_backend_mouwadji.Projet.models.Tache;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAGestionSoumissionService;

@RestController
@RequestMapping("/api")
public class GestionSoumissionController {
    
    @Autowired
    private IAGestionSoumissionService gestionSoumissionService;

    @PostMapping("/gestionSoumissions/create")
public ResponseEntity<GestionSoumission> createGestionSoumission(@RequestBody GestionSoumissionRequest request) {
    Tache tache = new Tache();
    tache.setNom(request.getTache().getNom());
    tache.setDescription(request.getTache().getDescription());
    tache.setDateDebut(request.getTache().getDateDebut());
    tache.setDateFin(request.getTache().getDateFin());
    tache.setEmployesAssignes(request.getTache().getEmployesAssignes());
    tache.setVehiculesAssignes(request.getTache().getVehiculesAssignes());

    // Ajoutez l'ID de la tâche à tous les employés assignés
    for (String employeId : request.getTache().getEmployesAssignes()) {
        Employe employe = employeService.getEmployeById(employeId);
        if (employe != null) {
            employe.addTacheAssignee(tache.getId());
            employeService.updateEmploye(employeId, employe);
        }
    }

    // Ajoutez l'ID de la tâche à tous les véhicules assignés
    for (String vehiculeId : request.getTache().getVehiculesAssignes()) {
        Vehicule vehicule = vehiculeService.getVehiculeById(vehiculeId);
        if (vehicule != null) {
            vehicule.addTacheAssignee(tache.getId());
            vehiculeService.updateVehicule(vehiculeId, vehicule);
        }
    }

    // Enregistrez la tâche dans la base de données
    tache = tacheService.createTache(tache);

    // Enregistrez la gestion de soumission avec l'ID de la soumission associée et l'ID de la tâche
    GestionSoumission gestionSoumission = new GestionSoumission();
    gestionSoumission.setSoumissionId(request.getSoumissionId());
    gestionSoumission.setTacheId(tache.getId());
    gestionSoumission = gestionSoumissionService.createGestionSoumission(gestionSoumission);

    return new ResponseEntity<>(gestionSoumission, HttpStatus.CREATED);
}

    @GetMapping("/gestionSoumissions/all")
    public ResponseEntity<List<GestionSoumission>> getGestionSoumissionAll() {
        List<GestionSoumission> gestionSoumissions = gestionSoumissionService.getGestionSoumissionAll();
        return new ResponseEntity<>(gestionSoumissions, HttpStatus.OK);
    }

    @DeleteMapping("/gestionSoumissions/delete/{id}")
    public void deleteGestionSoumission(@PathVariable String id) {
        gestionSoumissionService.deleteGestionSoumission(id);
    }

    @PutMapping("/gestionSoumissions/update/{id}")
    public GestionSoumission updateGestionSoumission(@PathVariable String id, @RequestBody GestionSoumission gestionSoumission) {
        return gestionSoumissionService.updateGestionSoumission(id, gestionSoumission);
    }

    @PutMapping("/gestionSoumissions/updateTache/{id}")
    public void updateTache(@PathVariable String id, @RequestBody Tache tache) {
        gestionSoumissionService.updateTache(id, tache);
    }

    @PutMapping("/gestionSoumissions/updateSoumission/{id}")
    public void updateSoumission(@PathVariable String id, @RequestBody Soumission soumission) {
        gestionSoumissionService.updateSoumission(id, soumission);
    }

    @GetMapping("/gestionSoumissions/{id}")
public ResponseEntity<GestionSoumission> getGestionSoumissionById(@PathVariable String id) {
    GestionSoumission gestionSoumission = gestionSoumissionService.getGestionSoumissionById(id);
    if (gestionSoumission != null) {
        return new ResponseEntity<>(gestionSoumission, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
}
