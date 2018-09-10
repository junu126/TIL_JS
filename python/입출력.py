# 파일 만들기 & 입력


## 'w'형식은 전체를 지우고 다시 쓰는것이다. (때문에 생성이 가능)
f1 = open('./새파일.txt', 'w')
for i in range(10):
    hit = "{0}번째 공격입니다.\n".format(i)
    f1.write(hit)
f1.close()

# 파일 읽기 - 한 줄

f2 = open('./새파일.txt', 'r')

## readline은 한줄씩 저장
line = f2.readline()
print(line)
f2.close()

# 파일 읽기 - 전체 줄 - 방법1

f3 = open('./새파일.txt', 'r')

while True:
    line = f3.readline()
    if not line: break
    print(line)

f3.close()

# 파일 읽기 - 전체 줄 - 방법2

f4 = open('./새파일.txt', 'r')

## readlines()는 리스트로 저장. => ['0번째 공격입니다.', '1번째...']
lines = f4.readlines()
for i in lines:
    print(i)

f4.close()

# 파일 읽기 - 전체 줄 - 방법3

f5 = open('./새파일.txt', 'r')

## read()는 전체를 문자열로 저장.

data = f5.read()
print(data)

f5.close()

# 파일에 내용 추가하기

## 'a'형식은 파일의 내용을 삭제 안하고 추가.
f6 = open('./새파일.txt', 'a')

for i in range(10, 21):
    value = '{0}번째 공격입니다.\n'.format(i)
    f6.write(value)

f6.close()

# 다른 문법

with open('./새파일.txt', 'w') as f7:
    for i in range(21,31):
        f7.write("{0}번째 공격입니다.\n".format(i))
        
