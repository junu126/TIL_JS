# 상속하는 클래스 만들기
class Calculator:
    def __init__(self):
        self.value = 0

    def add(self, val):
        self.value += val
        return self.value

class UpgradeCalculator(Calculator):
    def minus(self, val):
        self.value -= val
        return self.value

cal = UpgradeCalculator()
print(cal.add(10))
print(cal.minus(7))

# 상속하는 클래스 만들기2
class MaxLimitCalculator(Calculator):
    def add(self, val):
        self.value += val
        if self.value > 100:
            self.value = 100
    def value(self, val):
        return self.value

cal1 = MaxLimitCalculator()
cal1.add(50)
cal1.add(60)
print(cal1.value)

# 지정된 클래스 작성

class Calculator1:
    def __init__(self, _list):
        self.result = 0
        self._list = _list
    def sum(self):
        for i in self._list:
            self.result += i
        return self.result
    def avg(self):
        return self.result / len(self._list)

cal1 = Calculator1([1,2,3,4,5])
print(cal1.sum())  # 15
print(cal1.avg())  # 3.0

cal2 = Calculator1([6,7,8,9,10])
print(cal2.sum())  # 40
print(cal2.avg())  # 8.0
