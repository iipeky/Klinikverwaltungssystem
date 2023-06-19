package com.example.inf204backendklinik.doktor;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DoktorConfig {

    @Bean
    CommandLineRunner commandLineRunnerDoktor(DoktorRepository repository){
        return args -> {
            Doktor ali = new Doktor(
                    1L,
                    "Ali",
                    "Mustafa",
                    "Kardiologie"

            );
            Doktor zeynep = new Doktor(
                    2L,
                    "Zeynep",
                    "Zorlu",
                    "Endokrinilogie"

            );
            repository.saveAll(List.of(ali, zeynep));
        };

    }

}
