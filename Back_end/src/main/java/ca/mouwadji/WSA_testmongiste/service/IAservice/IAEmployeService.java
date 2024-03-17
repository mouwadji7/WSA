package ca.mouwadji.WSA_testmongiste.service.IAservice;

import java.util.List;
import ca.mouwadji.WSA_testmongiste.model.Employe;

public interface IAEmployeService {

    List<Employe> getAllEmployes();

    Employe getEmployeById(Long id);

    Employe addEmploye(Employe employe);

    Employe updateEmploye(Long id, Employe employe);

    void deleteEmploye(Long id);
}
