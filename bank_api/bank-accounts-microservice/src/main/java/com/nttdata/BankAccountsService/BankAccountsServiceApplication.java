package com.nttdata.BankAccountsService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BankAccountsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankAccountsServiceApplication.class, args);
	}

}
