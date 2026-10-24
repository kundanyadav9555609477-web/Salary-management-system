public class SalaryCalculator {
  
    public static double calculateNet(double base, double hra, double da, double bonus) {
        double pf = 1800;
        return base + hra + da + bonus - pf;
    }

    public static void main(String[] args) {
    
        double net = calculateNet(50000, 10000, 5000, 2000);
        System.out.println("Net Salary (Java se): Rs. " + net);
    }
}