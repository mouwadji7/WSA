package Wsa_backend_mouwadji.Projet.auth;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserInfoRepository extends MongoRepository<UserInfo, String>{
     Optional<UserInfo> findByName(String username); 
}
