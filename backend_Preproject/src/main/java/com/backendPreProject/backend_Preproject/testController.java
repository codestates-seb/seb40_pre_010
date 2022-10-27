package com.backendPreProject.backend_Preproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @GetMapping("/")
    public String helloWorld(){
        return "Hello team.binary(10) !" ;
    }
}
