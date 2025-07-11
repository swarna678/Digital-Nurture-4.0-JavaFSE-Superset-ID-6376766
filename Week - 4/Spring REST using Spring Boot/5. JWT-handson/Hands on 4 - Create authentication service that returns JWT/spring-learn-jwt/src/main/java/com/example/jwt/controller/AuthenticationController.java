package com.example.jwt.controller;

import com.example.jwt.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            String credentials = new String(Base64.getDecoder().decode(base64Credentials));
            String[] values = credentials.split(":", 2);

            try {
                Authentication auth = new UsernamePasswordAuthenticationToken(values[0], values[1]);
                authenticationManager.authenticate(auth);

                String token = jwtUtil.generateToken(values[0]);
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                return ResponseEntity.ok(response);

            } catch (AuthenticationException e) {
                return ResponseEntity.status(401).body("Invalid username or password");
            }
        }

        return ResponseEntity.status(401).body("Missing Authorization header");
    }

    @GetMapping("/welcome")
    public ResponseEntity<?> welcome() {
        return ResponseEntity.ok("Welcome! You are authenticated.");
    }
}
