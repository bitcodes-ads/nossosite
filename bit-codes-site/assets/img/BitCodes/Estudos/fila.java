package Estudos;

import java.util.ArrayList;
import java.util.Scanner;

public class fila {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> valores = new ArrayList<Integer>();

        System.out.println("Digite 8 valores:");

        for (int i = 0; i < 8; i++) {
            System.out.print("Valor " + (i + 1) + ": ");
            int valor = scanner.nextInt();
            valores.add(valor);
        }

        int menor = valores[0];
        int maior = valores[0];

        for (int valor : valores) {
            if (valor < menor) {
                menor = valor;
            }
            if (valor > maior) {
                maior = valor;
            }
        }

        System.out.println("O valor mínimo é: " + menor);
        System.out.println("O valor máximo é: " + maior);
    }
}