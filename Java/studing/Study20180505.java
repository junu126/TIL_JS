package studing;

import java.util.Scanner;

public class Study20180505 {

	public static void main(String[] args) {
		Scanner t = new Scanner(System.in);
		
		int arr[] = new int[5];
		double sum = 0;
		
		for(int i = 0 ; i < 5 ; i++){
			
			arr[i] = t.nextInt();
			
			sum = sum + arr[i];
		}
		double ave = sum/5;
		System.out.print("평균은 " + ave + "입니다.");
		
		t.close();
	}
}
