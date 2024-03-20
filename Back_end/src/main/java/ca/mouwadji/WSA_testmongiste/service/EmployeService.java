package ca.mouwadji.WSA_testmongiste.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.mouwadji.WSA_testmongiste.model.Employe;
import ca.mouwadji.WSA_testmongiste.repositories.EmployeRepository;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IAEmployeService;


import java.util.List;
import java.util.Optional;

@Service
public class EmployeService implements IAEmployeService {
    
    @Autowired
    private EmployeRepository employeRepository;

    @Override
    public List<Employe> getAllEmployes() {
        return employeRepository.findAll();
    }

    @Override
    public Employe getEmployeById(Long id) {
        Optional<Employe> optionalEmploye = employeRepository.findById(id);
        return optionalEmploye.orElse(null);
    }

    @Override
    public Employe addEmploye(Employe employe) {
        return employeRepository.save(employe);
    }

    @Override
    public Employe updateEmploye(Long id, Employe employe) {
        employe.setId(id);
        return employeRepository.save(employe);
    }

    @Override
    public void deleteEmploye(Long id) {
        employeRepository.deleteById(id);
    }
}
