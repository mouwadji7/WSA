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

import Wsa_backend_mouwadji.Projet.models.Tache;
import Wsa_backend_mouwadji.Projet.services.IAservice.IATacheService;

@RestController
@RequestMapping("/api")
public class TacheController {

    @Autowired
    private IATacheService tacheService;

    @PostMapping("/taches/create")
    public Tache createTache(@RequestBody Tache tache) {
        return tacheService.createTache(tache);
    }

    @DeleteMapping("/taches/delete/{id}")
    public void deleteTache(@PathVariable String id) {
        tacheService.deleteTache(id);
    }

    @PutMapping("/taches/update/{id}")
    public Tache updateTache(@PathVariable String id, @RequestBody Tache tache) {
        return tacheService.updateTache(id, tache);
    }

    @GetMapping("/taches/{id}")
    public ResponseEntity<Tache> getTacheById(@PathVariable String id) {
        Tache tache = tacheService.getTacheById(id);
        if (tache != null) {
            return new ResponseEntity<>(tache, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
