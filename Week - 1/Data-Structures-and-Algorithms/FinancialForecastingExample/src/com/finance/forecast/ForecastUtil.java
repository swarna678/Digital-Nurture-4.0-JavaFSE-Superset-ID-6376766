package com.finance.forecast;

public class ForecastUtil {

    public static double futureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static double futureValueMemo(double presentValue, double growthRate, int years, Double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != null) return memo[years];

        memo[years] = futureValueMemo(presentValue * (1 + growthRate), growthRate, years - 1, memo);
        return memo[years];
    }
}
