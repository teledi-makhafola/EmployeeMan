package com.sampleApp.crud.system.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sampleApp.crud.system.models.Employee;
import com.sampleApp.crud.system.repo.EmployeeRepo;

@RestController
@RequestMapping(value = "/employees")

public class EmployeeController {
    @Autowired 
    EmployeeRepo employeerepo;

    @GetMapping
    public List<Employee> getEmployees(){
        return  employeerepo.findAll();
    }
    @GetMapping(value = "/{id}")
    public Optional<Employee> findOne(Employee employee){ 
        return employeerepo.findById(employee.getId());
    }
    @PostMapping 
    public Employee save(@Validated @NonNull @RequestBody Employee employee){
        return employeerepo.save(employee);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails) {
        Employee updateEmployee = employeerepo.findById((int) id)
                .orElseThrow();
        updateEmployee.setName(employeeDetails.getName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmail(employeeDetails.getEmail());
        updateEmployee.setDepartment(employeeDetails.getDepartment());
        updateEmployee.setContactNo(employeeDetails.getContactNo());
        updateEmployee.setGender(employeeDetails.getGender());

        employeerepo.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }
    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable int id) {
        employeerepo.deleteById(id);
    }

    
}
