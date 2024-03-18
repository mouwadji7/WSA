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
@Document(collection = "taches")
public class Tache {
    @Id
    private String id;
    private List<String> vehiculesAssignes;
    private List<String> employesAssignes;
}
