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
    public GestionSoumission createGestionSoumission(@RequestBody GestionSoumission gestionSoumission) {
        return gestionSoumissionService.createGestionSoumission(gestionSoumission);
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
