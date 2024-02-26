package ca.mouwadji.WSA_testmongiste.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ca.mouwadji.WSA_testmongiste.model.Soumission;
import ca.mouwadji.WSA_testmongiste.service.SoumissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
@RequestMapping("/Soumission")
public class SoumissionController {

    
    private final SoumissionService soumissionService;

    @Autowired
    public SoumissionController(SoumissionService soumissionService) {
        this.soumissionService = soumissionService;
    }

    @PostMapping("/soumission")
    public ResponseEntity<Soumission> submitSoumission(@RequestBody Soumission soumission) {
        Soumission savedSoumission = soumissionService.saveSoumission(soumission);
        return new ResponseEntity<>(savedSoumission, HttpStatus.CREATED);
    }
    
}
