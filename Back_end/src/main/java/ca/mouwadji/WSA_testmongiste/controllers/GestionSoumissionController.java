package ca.mouwadji.WSA_testmongiste.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.mouwadji.WSA_testmongiste.model.Employe;
import ca.mouwadji.WSA_testmongiste.model.GestionSoumission;
import ca.mouwadji.WSA_testmongiste.model.Tache;
import ca.mouwadji.WSA_testmongiste.model.Vehicule;
import ca.mouwadji.WSA_testmongiste.service.GestionSoumissionService;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IAGestionSoumissionService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GestionSoumissionController {

    private final IAGestionSoumissionService gestionSoumissionService;

    @Autowired
    public GestionSoumissionController(GestionSoumissionService gestionSoumissionService) {
        this.gestionSoumissionService = gestionSoumissionService;
    }

    @RequestMapping("/gestionsoumissions")
    public GestionSoumission saveGestionSoumission(@RequestBody GestionSoumission gestionSoumission) {
        // Ajouter les tâches aux véhicules et aux employés
        List<Tache> taches = gestionSoumission.getTaches();
        if (taches != null && !taches.isEmpty()) {
            for (Tache tache : taches) {
                // Ajouter les tâches aux véhicules
                List<Vehicule> vehicules = tache.getVehicules();
                if (vehicules != null && !vehicules.isEmpty()) {
                    for (Vehicule vehicule : vehicules) {
                        vehicule.setTaches(taches);
                    }
                }
                // Ajouter les tâches aux employés
                List<Employe> employes = tache.getEmployes();
                if (employes != null && !employes.isEmpty()) {
                    for (Employe employe : employes) {
                        employe.setTaches(taches);
                    }
                }
            }
        }
        return gestionSoumissionService.saveGestionSoumission(gestionSoumission);
    }
    

    @GetMapping("/gestionsoumissions/{id}")
    public GestionSoumission getGestionSoumissionById(@PathVariable Long id) {
        return gestionSoumissionService.getGestionSoumissionById(id);
    }

    @GetMapping("/gestionsoumissions/taches/{id}")
    public List<Tache> getTachesByGestionSoumissionId(@PathVariable Long id) {
        return gestionSoumissionService.getTachesByGestionSoumissionId(id);
    }

    @GetMapping("/gestionsoumissions/employes/{id}")
    public List<Employe> getEmployesByGestionSoumissionId(@PathVariable Long id) {
        return gestionSoumissionService.getEmployesByGestionSoumissionId(id);
    }

    @GetMapping("/gestionsoumissions/vehicules/{id}")
    public List<Vehicule> getVehiculesByGestionSoumissionId(@PathVariable Long id) {
        return gestionSoumissionService.getVehiculesByGestionSoumissionId(id);
    }

    @DeleteMapping("/gestionsoumissions/{id}")
    public void deleteGestionSoumissionById(@PathVariable Long id) {
        // Récupérer la GestionSoumission à supprimer
        GestionSoumission gestionSoumission = gestionSoumissionService.getGestionSoumissionById(id);
    
        // Récupérer les tâches de la GestionSoumission
        List<Tache> taches = gestionSoumission.getTaches();
    
        // Supprimer les références aux tâches dans les véhicules
        List<Vehicule> vehicules = gestionSoumission.getVehicules();
        if (vehicules != null && !vehicules.isEmpty()) {
            for (Vehicule vehicule : vehicules) {
                vehicule.getTaches().removeAll(taches);
            }
        }
    
        // Supprimer les références aux tâches dans les employés
        List<Employe> employes = gestionSoumission.getEmployes();
        if (employes != null && !employes.isEmpty()) {
            for (Employe employe : employes) {
                employe.getTaches().removeAll(taches);
            }
        }
    
        // Supprimer la GestionSoumission
        gestionSoumissionService.deleteGestionSoumissionById(id);
    }
}
