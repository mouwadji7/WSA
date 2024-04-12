package Wsa_backend_mouwadji.Projet;

import Wsa_backend_mouwadji.Projet.auth.UserInfo;
import Wsa_backend_mouwadji.Projet.auth.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjetApplication implements CommandLineRunner {

	@Autowired
	private UserInfoService service;
	public static void main(String[] args) {
		SpringApplication.run(ProjetApplication.class, args);
	}

	@Override
	public void run(String... args) {
		service.addUser(new UserInfo("1", "admin", "admin@localhost", "passer", "ROLE_ADMIN,ROLE_USER" ));
	}
}
