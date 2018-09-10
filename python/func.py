# 기본 함수 문법

def sumFunc(a,b):
    return a+b

print(sumFunc(3,4))

# 람다 함수 문법

sumLamb = lambda a,b: a+b
print(sumLamb(3,4))

# 홀수 짝수 판별

def is_odd(num = int(input())):
    if num % 2 == 0:
        return '짝수'
    else:
        return '홀수'
print(is_odd())

# 평균값 계산

def aver(*args):
    _sum = 0
    for i in args:
        _sum = _sum + i
    return _sum / len(args)
print(aver(90,80,70))

# 구구단 출력

def GuGuDan(n=int(input())):
    if n >= 2 and n <= 9:
        i = 0
        _n = 0
        while i < 9:
            i+=1
            _n = _n + n
            print(_n, end=" ")
    else:
        print('2에서 9사이의 수를 입력해주세요.')
GuGuDan()

# 답지의 구구단

def gugu(n):
    for i in range(1,10):
        print('\n',n*i)
gugu(2)

# 피보나치 수열

def fibo(n):
    if n == 0: return 0
    if n == 1: return 1
    return fibo(n-2) + fibo(n-1)
for i in range(int(input())):
    print(fibo(i), end=" ")

# 5보다 큰 수만 -> lambda함수로 변경

func = lambda numbers: [number for number in numbers if number > 5]
print(func([2,3,4,5,6,7,8]))
