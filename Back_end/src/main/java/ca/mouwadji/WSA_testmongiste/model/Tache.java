package ca.mouwadji.WSA_testmongiste.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import java.util.List;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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

    @ManyToOne
    @JoinColumn(name = "soumission_id")
    private Soumission soumission;

    @ManyToMany
    private List<Employe> employes;

    @ManyToMany
    private List<Vehicule> vehicules;

    private Date heureDebut;
    private Date heureFin;
}