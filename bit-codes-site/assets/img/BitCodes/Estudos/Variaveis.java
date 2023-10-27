package Estudos;

import java.util.Arrays;

public class Variaveis {
    public static void main(String[] args) {
        int num = 42; 
        System.out.println(num);
        System.out.println("O número inteiro é: " +num);
        long numerolongo = 1234567890L;
        System.out.println(numerolongo); 
        System.out.println("O número longo é: " +numerolongo);  
        double numd = 3.123456;  
        System.out.println(numd); 
        System.out.println("O número decimal é: " +numd);   
        float numf = 2.123456f;
        System.out.println(numf); 
        System.out.println("O número decimal é: " +numf);     
        boolean chove = false;
        System.out.println(chove);
        System.out.println("Chove hoje? " +chove);
        boolean sol = true; 
        System.out.println(sol); 
        System.out.println("Fará sol hoje? " +sol); 
        char letra = 'A'; 
        System.out.println(letra);  
        System.out.println("A letra é: " +letra); 
        String nome = "Bit Codes";
        System.out.println(nome);
        System.out.println("A Startup é: "+nome);
        int[] num = {1, 2, 3, 4, 5, 6};
        System.out.print("A lista de núemro é: ");
        System.out.println(Arrays.toString(num));
        String[] nomes = {"Dinah", "Lais", "Lucas", "Renato", "Rodrigo", "Wedisley"};
        System.out.println(Arrays.toString(nomes));
        System.out.print("Bit Codes é composta por: ");
        System.out.println(Arrays.toString(nomes));
    }
}