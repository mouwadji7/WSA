package Wsa_backend_mouwadji.Projet.controllers;

import java.rmi.server.UID;
import java.util.List;
import java.util.Map;

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

import Wsa_backend_mouwadji.Projet.models.Employe;
import Wsa_backend_mouwadji.Projet.models.GestionSoumission;
import Wsa_backend_mouwadji.Projet.models.Soumission;
import Wsa_backend_mouwadji.Projet.models.Tache;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAEmployeService;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAGestionSoumissionService;
import Wsa_backend_mouwadji.Projet.services.IAservice.IATacheService;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAVehiculeService;

@RestController
@RequestMapping("/api")
public class GestionSoumissionController {
    
    @Autowired
    private IAGestionSoumissionService gestionSoumissionService;

    @Autowired
    private IAEmployeService employeService;

    @Autowired
    private IAVehiculeService vehiculeService;

    @Autowired
    private IATacheService tacheService;

    @PostMapping("/gestionSoumissions/create")
public ResponseEntity<GestionSoumission> createGestionSoumission(@RequestBody Map<String, Object> requestData) {
    try {
        if (requestData == null || !requestData.containsKey("tache") || !requestData.containsKey("soumissionId")) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Map<String, Object> tacheData = (Map<String, Object>) requestData.get("tache");

        Tache tache = new Tache();
        tache.setNom((String) tacheData.get("nom"));
        tache.setDescription((String) tacheData.get("description"));
        tache.setDateDebut((String) tacheData.get("dateDebut"));
        tache.setDateFin((String) tacheData.get("dateFin"));
        tache.setEmployesAssignes((List<String>) tacheData.get("employesAssignes"));
        tache.setVehiculesAssignes((List<String>) tacheData.get("vehiculesAssignes"));

        // Enregistrer la tâche dans la base de données
        tache = tacheService.createTache(tache);

        // Ajouter l'ID de la tâche à tous les employés assignés
        for (String employeId : tache.getEmployesAssignes()) {
            Employe employe = employeService.getEmployeById(employeId);
            if (employe != null) {
                employe.getTachesAssignes().add(tache.getId());
                employeService.updateEmploye(employeId, employe);
            }
        }

        // Ajouter l'ID de la tâche à tous les véhicules assignés
        for (String vehiculeId : tache.getVehiculesAssignes()) {
            vehiculeService.addTask(vehiculeId, tache.getId()); // Utilisation de la méthode addTask
        }

        // Enregistrer la gestion de soumission avec l'ID de la soumission associée et l'ID de la tâche
        GestionSoumission gestionSoumission = new GestionSoumission();
        gestionSoumission.setSoumissionId((String) requestData.get("soumissionId"));
        gestionSoumission.setTacheId(tache.getId());
        gestionSoumission.setId( new UID().toString() );
        gestionSoumission = gestionSoumissionService.createGestionSoumission(gestionSoumission);

        return new ResponseEntity<>(gestionSoumission, HttpStatus.CREATED);
    } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
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
