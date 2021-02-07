"""
    Deklarace funkce: string print(string)(string) 

    Code:  print('Hello')('World')
   Output: Hello World

    Code:  print('Good')('Luck')
   Output: Good Luck
"""


import builtins

def print(str1):          #Vnejsi funkce
    def print_second(str2):     #Vnitrni funkce
        builtins.print(str1 + " " + str2)      #Vypíše str1 + str2
    return print_second         #Vrátí print_Second = str1 + str2

print("Hello")("World") 
print("Good")("Luck")





    
