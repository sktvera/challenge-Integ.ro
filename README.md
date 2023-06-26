# [INTEG.RO](https://www.integ.ro/)



## Instructions

- Create a FORK of this project
- Create a BRANCH with your first name
- Solve the tests below
- COMMIT your changes and create a MERGE REQUEST for the MAIN branch


### TEST 1 - PYTHON
Using the "test1.py" file, write a function that returns true or false if an expression is a palindrome phrase.

### TEST 2 - PYTHON
Using "test2.py", write a function that separates several numbers in an array, following the text below:
- Consider that we have a basket with 17 (must be variable) apples and we want to organize them in boxes, with 4 apples each.
- After separated into boxes, I would like to group them into a pack of 2 boxes and then give my friends 2 pack each.
- This script should work with any number of apples, and separate proportionally according to the available amount.

```python
input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

output: {
  [ //friend 1
    [ //package 1
      [1,2,3,4], //box1
      [5,6,7,8] //box2
    ],
    [ //package 2
      [9,10,11,12], //box3
      [13,14,15,16] //box 4
    ]
  ],
  [ //friend 2
    [ //package 2
      [17] //box 5 - this box is incomplete, because only 1 apple left
    ]
  ]
}
```

### TEST 3 - SQL
As the image1.png, write a query in the file "test3.sql" that brings a listing with the following data:
- user.name
- user.birthdate
- customer.name
Where: user is over 18 years old and his status is = 1, and the customer's status is = 1, discarding users who do not belong to a customer.
Sorted by: customer.name

### TEST 4 - REACTJS
Assuming that the example of test 1 (palindrome) is a REST API, write a script in the file "test4.js" in Reactjs that contains 1 text input and a button, which validates whether the text entered is a palindrome or not, making a POST call via AJAX (preferably using AXIOS).