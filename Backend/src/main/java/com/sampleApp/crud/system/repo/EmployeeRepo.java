//sends data to the controller from the model
package com.sampleApp.crud.system.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sampleApp.crud.system.models.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer>  {
    
}

