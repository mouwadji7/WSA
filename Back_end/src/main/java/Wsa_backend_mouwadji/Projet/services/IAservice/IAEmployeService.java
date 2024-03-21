package Wsa_backend_mouwadji.Projet.services.IAservice;

import java.util.List;

import Wsa_backend_mouwadji.Projet.models.Employe;

public interface IAEmployeService {
    Employe createEmploye(Employe employe);
    Employe updateEmploye(String id, Employe employe);
    Employe addTask(String employeId, String taskId);
    Employe removeTask(String employeId, String taskId);
    void deleteEmploye(String id);
    Employe getEmployeById(String id);
    List<Employe> getAllEmployes();
    List<String> getTasks(String employeId);
}
