package com.example.inf204backendklinik.termine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TermineService {
    private final TermineRepository termineRepository;
    @Autowired
    public TermineService(TermineRepository termineRepository){
        this.termineRepository = termineRepository;
    }


    public List<Termine> getTermine() {
        return termineRepository.findAll();
    }

    public void erstellNeuenTermin(Termine termin) {
        Boolean isTrueOrNot= termineRepository.existsTerminByDatum(termin.getTerminDatum());
        Optional<Termine> termineOptional2 = termineRepository.findTerminByZeit(termin.getZeit());
        if (termineOptional2.isPresent() && isTrueOrNot) {
            throw new IllegalStateException("Dieser Termin ist schon genommen! Bitte wählen sie einen neuen Termin aus");
        }
        termineRepository.save(termin);
    }
}
