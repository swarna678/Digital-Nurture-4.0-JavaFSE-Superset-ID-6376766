package com.finance.forecast;

public class Main {
    public static void main(String[] args) {
        double presentValue = 1000;  
        double growthRate = 0.10;   
        int years = 5;

        double forecast = ForecastUtil.futureValue(presentValue, growthRate, years);
        System.out.println("Predicted Future Value (Recursive): " + forecast);

        
        Double[] memo = new Double[years + 1];
        double forecastMemo = ForecastUtil.futureValueMemo(presentValue, growthRate, years, memo);
        System.out.println("Optimized Future Value (Memoized): " + forecastMemo);
    }
}

