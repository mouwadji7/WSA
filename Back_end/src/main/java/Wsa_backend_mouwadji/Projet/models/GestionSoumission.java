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
@Document(collection = "gestionSoumissions")
public class GestionSoumission {
    @Id
    private String id;
    private String soumissionId;
    private String tacheId;
}
