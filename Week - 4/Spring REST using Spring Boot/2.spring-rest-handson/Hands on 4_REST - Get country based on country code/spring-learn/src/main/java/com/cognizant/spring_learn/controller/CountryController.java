package com.cognizant.spring_learn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

  
    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START: getCountryIndia()");

        
        org.springframework.context.ApplicationContext context =
                new org.springframework.context.support.ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("in");

        LOGGER.info("END: getCountryIndia()");
        return country;
    }

    
    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START: getCountry() with code = {}", code);

        Country country = countryService.getCountry(code);

        LOGGER.info("END: getCountry()");
        return country;
    }
}
