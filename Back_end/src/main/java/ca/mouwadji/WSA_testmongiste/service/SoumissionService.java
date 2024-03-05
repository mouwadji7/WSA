package ca.mouwadji.WSA_testmongiste.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.mouwadji.WSA_testmongiste.model.Soumission;
import ca.mouwadji.WSA_testmongiste.repositories.SoumissionRepository;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IASoumissionService;

@Service
public class SoumissionService implements IASoumissionService{

    private final SoumissionRepository soumissionRepository;

    @Autowired
    public SoumissionService(SoumissionRepository soumissionRepository) {
        this.soumissionRepository = soumissionRepository;
    }

    @Override
    public Soumission saveSoumission(Soumission soumission) {
        return soumissionRepository.save(soumission);
    }

    @Override
    public Soumission getSoumissionById(Long id) {
        return soumissionRepository.findById(id).orElse(null);
    }

    @Override
    public Soumission getSoumissionByReferenceNumber(String referenceNumber) {
        return soumissionRepository.findByReferenceNum(referenceNumber);
    }

    @Override
    public void deleteSoumissionById(Long id) {
        soumissionRepository.deleteById(id);
    }

    public List<Soumission> getSoumissionsAvecGestion() {
        return soumissionRepository.findSoumissionsByGestionSoumissionIsNotNull();
    }

    @Override
    public List<Soumission> getSoumissionsSansGestion() {
        return soumissionRepository.findSoumissionsByGestionSoumissionIsNull();
    }
}
