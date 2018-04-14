#include <stdio.h>

int main(void)
{
	//배열 써보기 
	int binary, j , i=0, power, sum = 0, sum2;
	int arr[1000] = { 0, };
	
	printf("2진수를 입력해주세요 : ");
	scanf("%d", &binary);
	
	printf("\n\n2진수 : %d", binary);
	
	while( binary >= 1 )
	{
		power = 1;

		for(i = 0; binary >= 1 ; i++)
		{
			arr[i] = binary % 2;
			binary /= 10;
			arr[i] *= power;			
			power *= 2;
		}
	} 
	
	printf("\n10진수 : ");
	
	sum2 = sizeof(arr) / sizeof(arr[0]); //arr배열의 개수.	
	
	for(j = 0 ; arr[j] <= sum2; j++)	//j를 0부터 10까지 더함  ( arr[j] <= 배열의 개수)
	{ 
		sum += arr[j]; // ex ) 1101 = > 8 + 4 + 0 + 1 = 13 
	}
			printf("%d", sum);	//arr 배열의 0부터11 10까지 출력 
}
