# if문 문제 2

lucky_list = [1, 9, 23, 46]
a = int(input("당신의 행운권 번호는? : "))

if a in lucky_list:
    print('야호')
else:
    print("ㅇㄴ")

# if문 문제 3

a = int(input())

if a % 2 == 0:
    print("짝수")
else:
    print("홀수")

# if문 문제 4

a = int(input("당신의 나이를 입력하세요 : "))
b = int(input("당신의 키를 입력하세요 : "))

if a < 30 and b >= 175:
    print("YES")
else:
    print("NO")
