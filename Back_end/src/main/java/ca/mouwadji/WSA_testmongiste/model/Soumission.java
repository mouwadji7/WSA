package ca.mouwadji.WSA_testmongiste.model;

import java.sql.Date;
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
@Document(collection="Soumission")
public class Soumission {
    
    @Id
    private Long id;

    private String referenceNumber;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    private String adresseDepart;
    private String adresseDestination;
    private Date dateDemenagement;
    private Date heureDemenagement;
    private String typeHabitation;
    private String emplacementHabitation;
    private String chambresACharger;
}

