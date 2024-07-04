""" 
Allen A
Tuesday, June 25
 """

#function that takes two num and returns sum 
def addition(x,y):
    return x + y 

# call function addition ()
result = addition(2,5)
print(result)
print(addition(8,-10))

# define a function to calculate the area of a rectangle using the length and the width
def arearectangle(length, width):
  area = length*width
  return area

# calling function arearectangle
print(f"The area of a rectangle is {arearectangle(3, 5)}")

# define a function to check if a number is positive, negative, or zero
def ispositive(num):
  try:
    if num > 0:
      return "positive"
    elif num < 0:
      return "negative"
    else:  # This handles num == 0
      return "zero" 
  except:  # This block is redundant in this case
    return "undefined" 
  
# calling function ispositive()
n = "Peter"
print(f"The number is {ispositive(n)}")

# define a function that check if a number is even number%2 == 0
def iseven(number):
  if number % 2 == 0:
    return True
  else:
    return False
  

print("\n--------- CAR CLASS EXAMPLE ---------")
class Car:
  # instantiation object
  def __init__(self, make, model, year):
    self.make = make
    self.model = model
    self.year = year
    self.odometer_reading = 0

  # method to return the information of the car
  def get_descriptive_car(self):
    return (f"{self.year}, {self.make} {self.model}")

# create an instance of the class Car
newcar = Car("Audi", "a4", 2020)

# access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)