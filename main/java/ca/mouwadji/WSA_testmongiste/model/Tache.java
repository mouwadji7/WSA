package ca.mouwadji.WSA_testmongiste.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Tache {
    
    @Id
    private Long id;

    private List<Employe> employes;

    private List<Vehicule> vehicules;

    private Date heureDebut;
    private Date heureFin;
}