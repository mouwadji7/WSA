package ca.mouwadji.WSA_testmongiste.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ca.mouwadji.WSA_testmongiste.model.Soumission;
import ca.mouwadji.WSA_testmongiste.service.SoumissionService;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IASoumissionService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/soumissions")
public class SoumissionController {

    private final IASoumissionService soumissionService;

    @Autowired
    public SoumissionController(SoumissionService soumissionService) {
        this.soumissionService = soumissionService;
    }

    @PostMapping("/Create")
    public Soumission saveSoumission(@RequestBody Soumission soumission) {
        return soumissionService.saveSoumission(soumission);
    }

    @GetMapping("/{id}")
    public Soumission getSoumissionById(@PathVariable Long id) {
        return soumissionService.getSoumissionById(id);
    }

    @GetMapping("/reference/{referenceNumber}")
    public Soumission getSoumissionByReferenceNumber(@PathVariable String referenceNumber) {
        return soumissionService.getSoumissionByReferenceNumber(referenceNumber);
    }

    @DeleteMapping("/{id}")
    public void deleteSoumissionById(@PathVariable Long id) {
        soumissionService.deleteSoumissionById(id);
    }

    @GetMapping("/avecgestion")
    public List<Soumission> getSoumissionsAvecGestion() {
        return soumissionService.getSoumissionsAvecGestion();
    }

    @GetMapping("/sansgestion")
    public List<Soumission> getSoumissionsSansGestion() {
        return soumissionService.getSoumissionsSansGestion();
    }

}
