package com.example.JunitSetupAndTeardownMethods;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
public class AppTest {
    Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }
    @After  
    public void tearDown() {
        calculator = null;
    }
    @Test
    public void testAdd() {
        int num1 = 10;
        int num2 = 5;
        int sum = calculator.add(num1, num2);
        assertEquals(15, sum);
    }
    @Test
   public void testSubtract() {
        int num1 = 10;
        int num2 = 5;
        int diff = calculator.subtract(num1, num2);
        assertEquals(5, diff);
    }
}

   

