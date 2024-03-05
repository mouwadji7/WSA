package ca.mouwadji.WSA_testmongiste.model;

import java.util.List;

public class GestionSoumission extends Soumission {
    
    private List<Tache> taches;
    private List<Employe> employes;
    private List<Vehicule> vehicules;

    // Getters et setters pour les listes de tâches, employés et véhicules

    public List<Tache> getTaches() {
        return taches;
    }

    public void setTaches(List<Tache> taches) {
        this.taches = taches;
    }

    public List<Employe> getEmployes() {
        return employes;
    }

    public void setEmployes(List<Employe> employes) {
        this.employes = employes;
    }

    public List<Vehicule> getVehicules() {
        return vehicules;
    }

    public void setVehicules(List<Vehicule> vehicules) {
        this.vehicules = vehicules;
    }
}
