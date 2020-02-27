# Dice

Write a program using classes to generate a standard dice roll.

```
Dice.roll
# => 6
```

**Note: the code above is calling a class method of Dice called "roll". It is not an instance method e.g. Dice.new.roll. Google "ruby class methods" before proceeding with the problem**

It should give you a different result each time.

```
Dice.roll
# => 5
Dice.roll
# => 2
```

When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice

```
Dice.roll(3)
# => [2,5,1]
```
