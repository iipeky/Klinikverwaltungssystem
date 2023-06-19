package com.example.inf204backendklinik.termine;
import com.example.inf204backendklinik.doktor.Doktor;
import com.example.inf204backendklinik.patient.Patient;
import jakarta.persistence.*;


import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="Termine")
public class Termine {
    @Id
    @SequenceGenerator(
            name = "termine_sequence",
            sequenceName = "termine_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "termine_sequence"
    )
    private Long termin_id;
    @Column(name="terminDatum")
    private LocalDate terminDatum;
    @Column(name="zeit")
    private String zeit;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "ausweisnummer")
    private Patient patient;
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "doktor_id")
    private Doktor doktor;

    public Termine() {
    }

    public Termine(Long termin_id, LocalDate terminDatum, String zeit) {
        this.termin_id = termin_id;
        this.terminDatum = terminDatum;
        this.zeit = zeit;

    }

    public Termine(LocalDate terminDatum, String zeit) {
        this.terminDatum = terminDatum;
        this.zeit = zeit;
    }

    public Long getTermin_id() {
        return termin_id;
    }

    public void setTermin_id(Long termin_id) {
        this.termin_id = termin_id;
    }

    public LocalDate getTerminDatum() {
        return terminDatum;
    }

    public void setTerminDatum(LocalDate terminDatum) {
        this.terminDatum = terminDatum;
    }

    public String getZeit() {
        return zeit;
    }

    public void setZeit(String zeit) {
        this.zeit = zeit;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doktor getDoktor() {
        return doktor;
    }

    public void setDoktor(Doktor doktor) {
        this.doktor = doktor;
    }
}
