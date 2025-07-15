package com.cognizant.loan.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        System.out.println("Fetching loan details for: " + number);
        return new Loan(number, "car", 6008900.00, 32586.00, 186);
    }
}

class Loan {
    private String number;
    private String type;
    private double loan;
    private double emi;
    private int tenure;

    public Loan(String number, String type, double loan, double emi, int tenure) {
        this.number = number;
        this.type = type;
        this.loan = loan;
        this.emi = emi;
        this.tenure = tenure;
    }

    
    public String getNumber() {
        return number;
    }

    public String getType() {
        return type;
    }

    public double getLoan() {
        return loan;
    }

    public double getEmi() {
        return emi;
    }

    public int getTenure() {
        return tenure;
    }

 
    public void setNumber(String number) {
        this.number = number;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setLoan(double loan) {
        this.loan = loan;
    }

    public void setEmi(double emi) {
        this.emi = emi;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }
}