package Wsa_backend_mouwadji.Projet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Wsa_backend_mouwadji.Projet.models.Employe;
import Wsa_backend_mouwadji.Projet.repositories.EmployeRepository;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAEmployeService;

@Service
public class EmployeService implements IAEmployeService {

    @Autowired
    private EmployeRepository employeRepository;

    @Override
    public Employe createEmploye(Employe employe) {
        return employeRepository.save(employe);
    }

    @Override
    public Employe updateEmploye(String id, Employe employe) {
        employe.setId(id);
        return employeRepository.save(employe);
    }

    @Override
    public Employe addTask(String employeId, String taskId) {
        Employe employe = employeRepository.findById(employeId).orElse(null);
        if (employe != null) {
            employe.getTachesAssignes().add(taskId);
            return employeRepository.save(employe);
        }
        return null;
    }

    @Override
    public Employe removeTask(String employeId, String taskId) {
        Employe employe = employeRepository.findById(employeId).orElse(null);
        if (employe != null) {
            employe.getTachesAssignes().remove(taskId);
            return employeRepository.save(employe);
        }
        return null;
    }

    @Override
    public void deleteEmploye(String id) {
        employeRepository.deleteById(id);
    }

    @Override
    public Employe getEmployeById(String id) {
        return employeRepository.findById(id).orElse(null);
    }

    @Override
    public List<Employe> getAllEmployes() {
        return employeRepository.findAll();
    }

    @Override
    public List<String> getTasks(String employeId) {
        Employe employe = employeRepository.findById(employeId).orElse(null);
        if (employe != null) {
            return employe.getTachesAssignes();
        }
        return null;
    }
}