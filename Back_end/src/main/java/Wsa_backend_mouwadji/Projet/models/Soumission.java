package Wsa_backend_mouwadji.Projet.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "soumissions")
public class Soumission {
    @Id
    private String id;
    private String referenceNumber;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String adresseDepart;
    private String adresseDestination;
    private String dateDemenagement;
    private String heureDemenagement;
    private String typeHabitation;
    private String emplacementHabitation;
    private int chambresACharger;
    private boolean gerer;
}
