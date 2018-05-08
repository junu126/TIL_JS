package studing;

import java.util.*;

public class Codeup1295 {
	public static void main(String[] args){ 
		
		Scanner t = new Scanner(System.in);
		
		String s = t.nextLine();
		
		char s_arr[] = new char[s.length()];
		
		for(int i = 0; i < s.length(); i++)
		{
			s_arr[i] = s.charAt(i);
		}
		
		for(int i = 0; i < s.length(); i++)
		{
			if(s_arr[i] >= 65 && s_arr[i] <= 90)
			{
				s_arr[i] += 32;
			} 
			else if(s_arr[i] >= 97 && s_arr[i] <= 122)
			{
				s_arr[i] -= 32;
			}
			else if( s_arr[i] == '.' )
			{
				s_arr[i] = '.';
			}
			else if( s_arr[i] == '!')
			{
				s_arr[i] = '!';
			}
		}
		
		for(int i = 0; i < s.length(); i++)
		{
			System.out.print(s_arr[i]);
		}
		
		t.close();
	}
}