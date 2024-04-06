package Wsa_backend_mouwadji.Projet.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import Wsa_backend_mouwadji.Projet.models.Soumission;
import Wsa_backend_mouwadji.Projet.services.IAservice.IASoumissionService;

@RestController
@PreAuthorize("hasAuthority('ROLE_ADMIN')")
@RequestMapping("/api")
//@CrossOrigin( origins = "*", allowedHeaders = "*")
public class SoumissionController {
    
    @Autowired
    private IASoumissionService soumissionService;

    @PostMapping("/soumissions/create")
    public Soumission createSoumission(@RequestBody Soumission soumission) {
        return soumissionService.createSoumission(soumission);
    }

    @DeleteMapping("/soumissions/delete/{id}")
    public void deleteSoumission(@PathVariable String id) {
        soumissionService.deleteSoumission(id);
    }

    @PutMapping("/soumissions/update/{id}")
    public Soumission updateSoumission(@PathVariable String id, @RequestBody Soumission soumission) {
        return soumissionService.updateSoumission(id, soumission);
    }

    @GetMapping("/soumissions/non-geres")
    public ResponseEntity<List<Soumission>> getNonGeresSoumissions() {
        List<Soumission> soumissions = soumissionService.getNonGeresSoumissions();
        return new ResponseEntity<>(soumissions, HttpStatus.OK);
    }

    @GetMapping("/soumissions/geres")
    public ResponseEntity<List<Soumission>> getGeresSoumissions() {
        List<Soumission> soumissions = soumissionService.getGeresSoumissions();
        return new ResponseEntity<>(soumissions, HttpStatus.OK);
    }

    @GetMapping("/soumissions/all")
    public ResponseEntity<List<Soumission>> getAllSoumissions() {
        List<Soumission> soumissions = soumissionService.getAllSoumissions();
        return new ResponseEntity<>(soumissions, HttpStatus.OK);
    }

    @GetMapping("/soumissions/by-reference/{referenceNumber}")
    public ResponseEntity<Soumission> getSoumissionByReferenceNumber(@PathVariable String referenceNumber) {
        Soumission soumission = soumissionService.getSoumissionByReferenceNumber(referenceNumber);
        if (soumission != null) {
            return new ResponseEntity<>(soumission, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/soumissions/{id}")
    public ResponseEntity<Soumission> getSoumissionById(@PathVariable String id) {
        Soumission soumission = soumissionService.getSoumissionById(id);
        if (soumission != null) {
            return new ResponseEntity<>(soumission, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
