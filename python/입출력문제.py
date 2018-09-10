# 파일 읽고 출력하기

with open("./test.txt", 'w') as f1:
    f1.write("Life is too short")

with open("./test.txt", 'r') as f2:
    print(f2.read())

# 파일저장

with open('./test2.txt', 'a') as f3:
    _input = input()
    f3.write("{0}\n".format(_input))

# 역순 저장

with open('./abc.txt', 'r') as f4:
    txt = f4.readlines()

_txt = reversed(txt)

with open('./abc.txt', 'w') as f4:
    for i in _txt:
        i = i.strip()
        f4.write(i)
        f4.write('\n')

# 파일 수정

with open('./text.txt', 'r') as f5:
    reading = f5.read()
creading = reading.replace('java','python')
with open('./text.txt', 'w') as f5:
    f5.write(creading)

# 평균값 구하기

with open('./sample.txt', 'r') as f6:
    num = f6.readlines()

_sum = 0
for i in num:
    _sum += int(i)
aver = _sum / len(num)

with open('./sample.txt', 'a') as f6:
    f6.write('\n\n 총합 : {0}\n평균 : {1}'.format(_sum, aver))
