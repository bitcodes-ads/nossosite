package Estudos;

import java.util.Scanner;

public class usuario {
    public static void main(String[] args) {
        Scanner teclado = new Scanner (System.in);

        System.out.println("Digite seu nome:");
        String digitado = teclado.nextLine();

        System.out.println("Seu nome é: " +digitado);

    teclado.close();


    }
    
}
