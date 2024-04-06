/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Wsa_backend_mouwadji.Projet.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author kmaco
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest {
    private String username; 
    private String password;
}
