package Wsa_backend_mouwadji.Projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Wsa_backend_mouwadji.Projet.models.GestionSoumission;
import Wsa_backend_mouwadji.Projet.models.Soumission;
import Wsa_backend_mouwadji.Projet.models.Tache;
import Wsa_backend_mouwadji.Projet.repositories.GestionSoumissionRepository;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAEmployeService;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAGestionSoumissionService;
import Wsa_backend_mouwadji.Projet.services.IAservice.IASoumissionService;
import Wsa_backend_mouwadji.Projet.services.IAservice.IATacheService;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAVehiculeService;

@Service
public class GestionSoumissionService implements IAGestionSoumissionService {
    
    

    @Autowired
    private GestionSoumissionRepository gestionSoumissionRepository;

    @Autowired
    private IATacheService tacheService;

    @Autowired
    private IAEmployeService employeService;

    @Autowired
    private IAVehiculeService vehiculeService;

    @Autowired
    private IASoumissionService soumissionService;

    
    
    @Override
    public GestionSoumission createGestionSoumission(GestionSoumission gestionSoumission) {
        return gestionSoumissionRepository.save(gestionSoumission);
    }

    @Override
    public List<GestionSoumission> getGestionSoumissionAll() {
        return gestionSoumissionRepository.findAll();
    }
    
    @Override
public void deleteGestionSoumission(String id) {
    GestionSoumission gestionSoumission = gestionSoumissionRepository.findById(id).orElse(null);
    if (gestionSoumission != null) {
        // Supprimer la tâche associée
        String tacheId = gestionSoumission.getTacheId();
        tacheService.deleteTache(tacheId);

        // Supprimer les tâches de tous les employés associés
        List<String> employesIds = tacheService.getEmployesAssignes(tacheId);
        if (employesIds != null && !employesIds.isEmpty()) {
            for (String employeId : employesIds) {
                employeService.removeTask(employeId, tacheId);
            }
        }

        // Supprimer les tâches de tous les véhicules associés
        List<String> vehiculesIds = tacheService.getVehiculesAssignes(tacheId);
        if (vehiculesIds != null && !vehiculesIds.isEmpty()) {
            for (String vehiculeId : vehiculesIds) {
                vehiculeService.removeTask(vehiculeId, tacheId);
            }
        }

        // Supprimer la gestion de soumission
        gestionSoumissionRepository.deleteById(id);

        // Supprimer la soumission associée
        soumissionService.deleteSoumission(gestionSoumission.getSoumissionId());
    }
}
    @Override
public GestionSoumission getGestionSoumissionBySoumissionId(String soumissionId) {
    return gestionSoumissionRepository.findBySoumissionId(soumissionId);
}

    @Override
    public GestionSoumission updateGestionSoumission(String id, GestionSoumission gestionSoumission) {
        gestionSoumission.setId(id);
        return gestionSoumissionRepository.save(gestionSoumission);
    }

    @Override
    public void updateTache(String id, Tache tache) {
        GestionSoumission gestionSoumission = gestionSoumissionRepository.findById(id).orElse(null);
        if (gestionSoumission != null) {
            tache.setId(gestionSoumission.getTacheId());
            tacheService.updateTache(tache.getId(), tache);
        }
    }

    @Override
    public void updateSoumission(String id, Soumission soumission) {
        GestionSoumission gestionSoumission = gestionSoumissionRepository.findById(id).orElse(null);
        if (gestionSoumission != null) {
            soumission.setId(gestionSoumission.getSoumissionId());
            soumissionService.updateSoumission(soumission.getId(), soumission);
        }
    }

    @Override
    public GestionSoumission getGestionSoumissionById(String id) {
        return gestionSoumissionRepository.findById(id).orElse(null);
    }

}