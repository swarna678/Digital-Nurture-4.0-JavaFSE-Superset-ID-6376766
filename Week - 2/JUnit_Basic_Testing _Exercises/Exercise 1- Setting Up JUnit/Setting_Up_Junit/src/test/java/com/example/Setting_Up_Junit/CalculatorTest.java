package com.example.Setting_Up_Junit;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

 @Test
 public void testAdd() {
     Calculator calc = new Calculator();
     int result = calc.add(2, 3);
     assertEquals(5, result);  
 }

 @Test
 public void testSubtract() {
     Calculator calc = new Calculator();
     int result = calc.subtract(10, 4);
     assertEquals(6, result);  
 }
}
