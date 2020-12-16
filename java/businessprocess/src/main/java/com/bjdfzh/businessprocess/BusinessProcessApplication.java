package com.bjdfzh.businessprocess;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.transaction.annotation.EnableTransactionManagement;
@SpringBootApplication
@EnableTransactionManagement
@EnableCaching
@MapperScan("com.bjdfzh.businessprocess.dao")
public class BusinessProcessApplication {
	public  static void  main(String[] args)
	{
		SpringApplication.run(BusinessProcessApplication.class, args);
	}
}
