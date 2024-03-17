package ca.mouwadji.WSA_testmongiste.controllers;

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

import ca.mouwadji.WSA_testmongiste.model.Employe;
import ca.mouwadji.WSA_testmongiste.service.IAservice.IAEmployeService;

@RestController
@RequestMapping("/api")
public class EmployeController {

    @Autowired
    private IAEmployeService employeService;

    @GetMapping("/employes")
    public List<Employe> getAllEmployes() {
        return employeService.getAllEmployes();
    }

    @GetMapping("/employes/{id}")
    public Employe getEmployeById(@PathVariable Long id) {
        return employeService.getEmployeById(id);
    }

    @PostMapping("/employes/create")
    public Employe addEmploye(@RequestBody Employe employe) {
        return employeService.addEmploye(employe);
    }

    @PutMapping("/employes/{id}")
    public Employe updateEmploye(@PathVariable Long id, @RequestBody Employe employe) {
        return employeService.updateEmploye(id, employe);
    }

    @DeleteMapping("/employes/{id}")
    public void deleteEmploye(@PathVariable Long id) {
        employeService.deleteEmploye(id);
    }
}
