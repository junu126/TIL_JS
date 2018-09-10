# 1번 문제

num = 0
ans = 0
while num < 100:
    num = num+1
    ans = num + ans
print(ans)

# 2번 문제

num = 0
ans = 0

while num != 1000:
    num = num + 1
    if num % 3 == 0:
        ans = ans + num
print(ans)
    
# 3번 문제

A = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]
i = 0
ans = 0

while i != 10:
    if A[i] >= 50:
        ans = ans + A[i]
    i= i + 1    
print(ans)   

# 4번 문제

i = 0
while True:
    i += 1
    if i < 5:
        print("*" * i)

# 5번 문제

i = 7
space = 0

while i > 0:
   print(' ' * space + "*" * i)
   i -= 2
   space += 1
