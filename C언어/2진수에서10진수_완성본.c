#include <stdio.h>

int main(void)
{
	//�迭 �Ẹ�� 
	int binary, j , i=0, power, sum = 0, sum2;
	int arr[1000] = { 0, };
	
	printf("2������ �Է����ּ��� : ");
	scanf("%d", &binary);
	
	printf("\n\n2���� : %d", binary);
	
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
	
	printf("\n10���� : ");
	
	sum2 = sizeof(arr) / sizeof(arr[0]); //arr�迭�� ����.	
	
	for(j = 0 ; arr[j] <= sum2; j++)	//j�� 0���� 10���� ����  ( arr[j] <= �迭�� ����)
	{ 
		sum += arr[j]; // ex ) 1101 = > 8 + 4 + 0 + 1 = 13 
	}
			printf("%d", sum);	//arr �迭�� 0����11 10���� ��� 
}
