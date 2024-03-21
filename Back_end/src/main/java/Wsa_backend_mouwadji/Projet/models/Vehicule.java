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
@Document(collection = "vehicules")
public class Vehicule {
    @Id
    private String id;
    private String nom;
    private String type;
    private List<String> tachesAssignes;
}
