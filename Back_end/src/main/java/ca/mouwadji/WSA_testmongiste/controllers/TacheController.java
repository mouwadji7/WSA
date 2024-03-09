package ca.mouwadji.WSA_testmongiste.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.mouwadji.WSA_testmongiste.model.Tache;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IATacheService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TacheController {

    @Autowired
    private IATacheService tacheService;

    @GetMapping("/taches")
    public List<Tache> getAllTaches() {
        return tacheService.getAllTaches();
    }

    @GetMapping("/taches/{id}")
    public Tache getTacheById(@PathVariable Long id) {
        return tacheService.getTacheById(id);
    }

    @PostMapping("/taches")
    public Tache addTache(@RequestBody Tache tache) {
        return tacheService.addTache(tache);
    }

    @PutMapping("/taches/{id}")
    public Tache updateTache(@PathVariable Long id, @RequestBody Tache tache) {
        return tacheService.updateTache(id, tache);
    }

    @DeleteMapping("/taches/{id}")
    public void deleteTache(@PathVariable Long id) {
        tacheService.deleteTache(id);
    }
}
