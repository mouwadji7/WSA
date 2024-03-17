package ca.mouwadji.WSA_testmongiste.service.IAservice;

import ca.mouwadji.WSA_testmongiste.model.Soumission;
import java.util.List;

public interface IASoumissionService {
    Soumission saveSoumission(Soumission soumission);
    Soumission getSoumissionById(Long id);
    Soumission getSoumissionByReferenceNumber(String referenceNumber);
    void deleteSoumissionById(Long id);
    List<Soumission> getSoumissionsAvecGestion();
    List<Soumission> getSoumissionsSansGestion();
}
