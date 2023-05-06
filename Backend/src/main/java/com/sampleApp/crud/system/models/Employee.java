package com.sampleApp.crud.system.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")

public class Employee {
   private int id;
   private String name;
   private String last_Name;
   private String email;
   private String department;
   private String contact_No;
   public Employee() {
   }

   public Employee(int id, String name, String last_Name, String email, String department,String contact_No) {
    this.id = id;
    this.name = name;
    this.last_Name = last_Name;
    this.email = email;
    this.department = department;
    this.contact_No = contact_No;
   }
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   public int getId() {
    return id;
   }

   public void setId(int id) {
    this.id = id;
   }
   public String getName(){
    return name;
   }
   public void setName(String name){
    this.name = name;
   }
   public String getLastName(){
    return last_Name;
   }
   public void setLastName(String last_Name){
    this.last_Name = last_Name;
   }
   public String getEmail(){
    return email;
   }
   public void setEmail(String email){
    this.email = email;
   }
   public String getDepartment(){
    return department;
   }
   public void setDepartment(String department){
    this.department = department;
   }
   public String getContactNo(){
    return contact_No;
   }
   public void setContactNo(String contact_No){
    this.contact_No = contact_No;
   }
}
