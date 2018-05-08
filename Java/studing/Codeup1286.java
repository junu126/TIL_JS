package studing;

import java.util.*;

public class Codeup1286 {
	public static void main(String[] args){
		int biggest = -100000000;
		int smallest = 100000000;
				
		Scanner t = new Scanner(System.in);
		
		for(int i = 0; i < 5; i++)
		{
			int comp = t.nextInt();
			if(biggest <= comp)
			{
				biggest = comp;
			}
			
			if(smallest >= comp)
			{
				smallest = comp;
			}
		}
		
		System.out.println(biggest);
		
		System.out.println(smallest);
		
		t.close();
		
	}

}
