package ca.mouwadji.WSA_testmongiste.service;

import org.springframework.stereotype.Service;
import ca.mouwadji.WSA_testmongiste.model.Soumission;
import ca.mouwadji.WSA_testmongiste.repository.SoumissionRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class SoumissionService {

    private final SoumissionRepository soumissionRepository;
    
    @Autowired
    public SoumissionService(SoumissionRepository soumissionRepository) {
        this.soumissionRepository = soumissionRepository;
    }

    public Soumission saveSoumission(Soumission soumission) {
        return soumissionRepository.save(soumission);
    }
}
