package com.ecommerce.search;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "T-Shirt", "Apparel"),
            new Product(105, "Camera", "Electronics")
        };

        // 🔎 Linear Search
        System.out.println("🔍 Linear Search Result:");
        Product result1 = SearchUtil.linearSearch(products, "Mobile");
        System.out.println(result1 != null ? result1 : "Product not found");

        // Sort for Binary Search
        SearchUtil.sortProductsByName(products);

        // 🔎 Binary Search
        System.out.println("\n🔍 Binary Search Result:");
        Product result2 = SearchUtil.binarySearch(products, "Mobile");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}