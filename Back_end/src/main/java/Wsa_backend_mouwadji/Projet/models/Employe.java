package Wsa_backend_mouwadji.Projet.models;

import java.util.List;

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
@Document(collection = "employes")
public class Employe {
    @Id
    private String id;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private List<String> tachesAssignes;

    // Getters and setters
}
