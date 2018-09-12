class Calculator:
    def __init__(self):
        self.result = 0

    def add(self, num):
        self.result += num
        return self.result

    def sub(self, num):
        self.result -= num
        return self.result

cal1 = Calculator()
cal2 = Calculator()

#print(cal1.add(10))
#print(cal1.add(34))
#print(cal2.add(10))
#print(cal2.add(20))
#print(cal1.sub(10))
#print(cal1.sub(34))
#print(cal2.sub(10))
#print(cal2.sub(20))

class FourCal:
    def __init__(self, num1 , num2):
        self.num1 = num1
        self.num2 = num2

    def setdata(self, num1, num2):
        self.num1 = num1
        self.num2 = num2
        
    def sum(self):
        return print(self.num1 + self.num2)
    def mul(self):
        return print(self.num1 * self.num2)
    def sub(self):
        return print(self.num1 - self.num2)
    def div(self):
        return print(int(self.num1 / self.num2))

#a = FourCal(4,2)

#a.setdata(4,2)
#print(a.sum())
#print(a.mul())
#print(a.sub())
#print(a.div())

class MoreFourCal(FourCal):
    def pow(self):
        return print(self.num1 ** self.num2)

class SafeFourCal(FourCal):
    def div(self):
        if self.num2 == 0:
            return 0
        else:
            self.num1 / self.num2
            
a = MoreFourCal(4,0)
b = SafeFourCal(4,0)
a.sum()
a.mul()
a.sub()
b.div()
a.pow()
