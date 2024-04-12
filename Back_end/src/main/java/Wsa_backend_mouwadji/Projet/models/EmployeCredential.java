package Wsa_backend_mouwadji.Projet.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "credentials")
public class EmployeCredential {
    @Id
    private String idEmploye;
    private String email;
    private String password;
    private String roles;
}
