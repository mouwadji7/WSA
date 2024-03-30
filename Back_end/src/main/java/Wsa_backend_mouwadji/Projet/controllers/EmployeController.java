package Wsa_backend_mouwadji.Projet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Wsa_backend_mouwadji.Projet.models.Employe;
import Wsa_backend_mouwadji.Projet.services.IAservice.IAEmployeService;

@RestController
@RequestMapping("/api")
public class EmployeController {

    @Autowired
    private IAEmployeService employeService;

    @PostMapping("/employes")
    public Employe createEmploye(@RequestBody Employe employe) {
        return employeService.createEmploye(employe);
    }

    @PutMapping("/employes/{id}")
    public Employe updateEmploye(@PathVariable String id, @RequestBody Employe employe) {
        return employeService.updateEmploye(id, employe);
    }

    @PostMapping("/{employeId}/addTask/{taskId}")
    public Employe addTask(@PathVariable String employeId, @PathVariable String taskId) {
        return employeService.addTask(employeId, taskId);
    }

    @PostMapping("/employes/{employeId}/removeTask/{taskId}")
    public Employe removeTask(@PathVariable String employeId, @PathVariable String taskId) {
        return employeService.removeTask(employeId, taskId);
    }

    @DeleteMapping("/employes/{id}")
    public void deleteEmploye(@PathVariable String id) {
        employeService.deleteEmploye(id);
    }

    @GetMapping("/employes/{id}")
    public Employe getEmployeById(@PathVariable String id) {
        return employeService.getEmployeById(id);
    }

    @GetMapping("/employes")
    public List<Employe> getAllEmployes() {
        return employeService.getAllEmployes();
    }
}
