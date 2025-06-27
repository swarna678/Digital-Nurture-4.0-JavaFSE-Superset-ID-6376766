package com.example.Assertions_in_Junit;

import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest{
	
	App app = new App();
	
	@Test
	public void addtest() {
		int result = app.add(2, 3);
		assertEquals(5, result);
	}
	
	@Test
	public void testGreaterThan() {
		assertTrue(app.greaterThan(5,3));		
	}
	
	@Test
	public void testLessThan() {
		assertFalse(app.lessThan(6,5));		
	}
	
	@Test
	public void testNullValue() {
		assertNull( "should return null value", app.getNullValue());
	}
	
	@Test
	public void testNotNullObject() {
		Object obj = new Object();
		assertNotNull("Object should not be null",obj);
	}
}