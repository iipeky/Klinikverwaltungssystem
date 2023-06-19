package com.example.inf204backendklinik.termine;

import com.example.inf204backendklinik.doktor.Doktor;
import com.example.inf204backendklinik.patient.Patient;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class TermineRepositoryTest {

    @Autowired
    private TermineRepository underTest;

/*
    @AfterEach
    void cleaner_test(){
        underTest.deleteAll();
    }
*/


    @Test
    void checksWhetherDatumExists() {

        Patient patient = new Patient(397222222222L);
        Doktor doktor = new Doktor(1L);
        LocalDate now = LocalDate.parse("2019-12-15");
        Termine termin = new Termine(now, "9.35");

        underTest.save(termin);

        Boolean expected = underTest.existsTerminByDatum(termin.getTerminDatum());

        assertThat(expected).isTrue();
    }

    @Test
    void checkWhetherTerminZeitExists() {
        //given
        Patient patient = new Patient(397222222222L);
        Doktor doktor = new Doktor(1L);
        LocalDate now = LocalDate.now();
        Termine termin = new Termine(now, "9.40");
        underTest.save(termin);
        // when
        Optional<Termine> expected2 = underTest.findTerminByZeit("9.40");
        // then
        assertNotNull(expected2);
    }
}