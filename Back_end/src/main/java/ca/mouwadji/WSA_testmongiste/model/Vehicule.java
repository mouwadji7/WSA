package ca.mouwadji.WSA_testmongiste.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection="Vehicule")
public class Vehicule {
    
    @Id
    private Long id;

    private String type;

    @ManyToMany(mappedBy = "vehicules")
    private List<Tache> taches;
}