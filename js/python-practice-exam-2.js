(function () {
  var STORAGE_KEY = "gmetrix-python-practice-exam-2-answers";

  var QUESTIONS = [
    {
      id: "384141",
      title: "Guess a random number",
      type: "blanks",
      prompt: [
        "Using the dropdown arrows for the missing code pieces, complete the following code example so that it accomplishes the functionality of this game:",
        "A user gets five chances to correctly guess a whole number from 1 to 10. If the user guesses correctly, they get a congratulatory message and the game ends. If not, they get a message thanking them for playing."
      ],
      code: [
        "_____",
        "",
        "for i in range(5):",
        "    guess = int(input(\"Enter a number from 1 to 10. \"))",
        "    randNum = _____",
        "",
        "    if guess == randNum:",
        "        print(\"We matched!\")",
        "        break",
        "    else:",
        "        print(\"We did not match. Try again\")"
      ],
      blanks: [
        { label: "Import random module", options: ["import random", "import datetime", "from math import random", "random import"], correct: "import random" },
        { label: "Random number", options: ["random.randint(1, 10)", "random.random(1, 10)", "randint(1, 10)", "random.randrange(1, 10, 5)"], correct: "random.randint(1, 10)" }
      ]
    },
    {
      id: "384287",
      title: "Display function documentation",
      type: "blanks",
      prompt: [
        "A developer wants documentation for a function to display when called upon in a print statement. Use the dropdown menus to fill in the remainder of the code necessary to generate the documentation."
      ],
      code: [
        "def area(width, height):",
        "    _____ Generates the area of a rectangle _____",
        "    totalArea = width * height",
        "    return totalArea",
        "",
        "print( _____ )"
      ],
      blanks: [
        { label: "Opening docstring", options: ["\"\"\"", "'''", "#", "//"], correct: "\"\"\"" },
        { label: "Closing docstring", options: ["\"\"\"", "'''", "#", "//"], correct: "\"\"\"" },
        { label: "Documentation attribute", options: ["area.__doc__", "area.doc", "area.__documentation__", "area.help"], correct: "area.__doc__" }
      ]
    },
    {
      id: "384288",
      title: "Default function argument",
      type: "single",
      prompt: [
        "Examine the following code:",
        "What needs to change in order for the height in the area function to be 12 if a height is not specified when calling the function?"
      ],
      code: [
        "def area(width, height):",
        "    area = width * height",
        "    return area",
        "box1area = area(5, 2)",
        "box2area = area(6)"
      ],
      choices: [
        "height variable setting height =12 inside the function",
        "height variable setting height =12 before the function is declared",
        "def to def area(width, height = 12)",
        "box2area line to box2area = area(6,12)"
      ],
      correct: "def to def area(width, height = 12)"
    },
    {
      id: "384289",
      title: "Pydoc statements",
      type: "tf",
      prompt: ["For each of the statements regarding pydoc, select Yes if the statement is true and No if false."],
      rows: [
        { text: "The proper syntax for pydoc is Python -m pydoc module where module represents the name of a Python module.", correct: "Yes" },
        { text: "Pydoc is a self-contained executable that can be run from a command-line prompt.", correct: "No" },
        { text: "Pydoc generates documentation on Python modules.", correct: "Yes" }
      ]
    },
    {
      id: "384290",
      title: "Fix an if statement",
      type: "multi",
      prompt: [
        "A junior programmer enters the following code. When trying to run it, errors are generated.",
        "Which two fixes are necessary for it to work? (Choose two)"
      ],
      code: [
        "height = 5",
        "width = 5",
        "if height == width",
        "print(\"You have a square\")"
      ],
      choices: [
        "The if condition needs to be in parentheses.",
        "A colon needs to be added at the end of the if condition.",
        "The print statement needs to be indented.",
        "The if condition needs to have a single equals sign, not a double equals sign."
      ],
      correct: [
        "A colon needs to be added at the end of the if condition.",
        "The print statement needs to be indented."
      ]
    },
    {
      id: "384291",
      title: "Display dates in multiple formats",
      type: "blanks",
      prompt: [
        "A new developer is learning the code necessary to display dates in multiple formats. The developer has been tasked with creating a display with dates.",
        "Using the dropdown arrows, complete the code snippet to create the display, leaving open the possibility of time being displayed in the future.",
        "2023-01-01 03:19:43.412476",
        "The current date is 01/01/2023",
        "The current weekday is: 6"
      ],
      code: [
        "_____",
        "current_date = _____",
        "",
        "print(current_date)",
        "print(\"The current date is\", datetime.datetime.strftime(current_date, \"_____\"))",
        "print(\"The current weekday is\", current_date_____)"
      ],
      blanks: [
        { label: "Import", options: ["import datetime", "from datetime import date", "import time"], correct: "import datetime" },
        { label: "Current date and time", options: ["datetime.datetime.now()", "datetime.date.today()", "time.localtime()"], correct: "datetime.datetime.now()" },
        { label: "Date format", options: ["%m/%d/%Y", "%d/%m/%Y", "%Y-%m-%d"], correct: "%m/%d/%Y" },
        { label: "Weekday call", options: [".weekday()", ".day", ".isoweekday()"], correct: ".weekday()" }
      ]
    },
    {
      id: "384292",
      title: "Loop through product tuple",
      type: "multi",
      prompt: [
        "The following code example is an attempt to loop through and print a tuple of products by serial number. When run, it generates errors.",
        "Which fixes are needed to make the code work properly and return the list of products? (Choose two)"
      ],
      code: [
        "products = (\"1111\", \"2222\", \"3333\", \"4444\", \"5555\", \"6666\", \"7777\", \"8888\", \"9999\")",
        "",
        "for product in products:",
        "",
        "print(products[product])"
      ],
      choices: [
        "Change the print statement to print(product).",
        "Remove the colon from the for statement.",
        "Indent the print statement.",
        "Indent the for statement."
      ],
      correct: [
        "Change the print statement to print(product).",
        "Indent the print statement."
      ]
    },
    {
      id: "384293",
      title: "Handle divide errors",
      type: "blanks",
      prompt: [
        "You are in the process of writing code to divide two numbers. You want the result to display as long as there are no errors. If there are errors, you want to display a message indicating that the user either tried to divide by zero or used an invalid number.",
        "Using the dropdown arrows, fill in the missing keywords."
      ],
      code: [
        "a = float(input(\"Enter a number. \"))",
        "b = float(input(\"Enter a number to divide by. \"))",
        "____:",
        "    print(f\"The answer is {a/b}.\")",
        "",
        "____:",
        "    print(\"This did not work. Did you try to divide by zero?\")"
      ],
      blanks: [
        { label: "First block", options: ["try", "except", "else", "finally"], correct: "try" },
        { label: "Error block", options: ["try", "except", "else", "finally"], correct: "except" }
      ]
    },
    {
      id: "384294",
      title: "Try-except-else-finally behavior",
      type: "tf",
      prompt: ["For the following code, answer Yes if the statements are true and No if false."],
      code: [
        "a = float(input(\"Enter a number. \"))",
        "b = float(input(\"Enter a number to divide by. \"))",
        "",
        "try:",
        "    print(f\"The answer is {a/b}.\")",
        "except:",
        "    print(\"This did not work. Did you try to divide by zero?\")",
        "else:",
        "    print(\"You successfully divided two numbers.\")",
        "finally:",
        "    print(\"Thank you for playing.\")"
      ],
      rows: [
        { text: "The finally statement will run regardless of which pieces of code above it run.", correct: "Yes" },
        { text: "Both the try and except parts will run if a = 0 and b != 0.", correct: "No" },
        { text: "The else part will run if a = 0 and b != 0.", correct: "Yes" }
      ]
    },
    {
      id: "384295",
      title: "List index error type",
      type: "single",
      prompt: [
        "A junior programmer writes the following code to store a list and then retrieve an item from the list:",
        "What type of error message (if this code generates an error) will it produce?"
      ],
      code: [
        "trees = ['Douglas fir', 'Oak', 'Balsam fir']",
        "last_tree = trees[3]",
        "print(f'The last tree is {last_tree}.')"
      ],
      choices: ["A logic error.", "A runtime error.", "A syntax error.", "No error will be generated."],
      correct: "A runtime error."
    },
    {
      id: "384297",
      title: "Seven-day sign-in sheet",
      type: "sequence",
      prompt: [
        "You are trying to build a sign-in sheet for a seven-day class with 10 students each day. Using drag and drop, drag the correct statements in the correct order to create this code. Not all statements will be used."
      ],
      items: [
        "print(f\"Student{student} __________\")",
        "print(f\"Day: {classDay}\")",
        "for classDay in range(1,7):",
        "for student in range(1,10):",
        "for student in range(1,11):",
        "for classDay in range(1,8):"
      ],
      correct: [
        "for classDay in range(1,8):",
        "print(f\"Day: {classDay}\")",
        "for student in range(1,11):",
        "print(f\"Student{student} __________\")"
      ],
      slotLabel: "Line"
    },
    {
      id: "384299",
      title: "Skip day 15 in a program",
      type: "blanks",
      prompt: [
        "You are writing code to have activity for every day in a 30-day program. There should be no activity on day 15.",
        "Using the dropdown arrows, fill in the missing pieces to the code."
      ],
      code: [
        "_____ dailyProgram in range(1, _____):",
        "    if dailyProgram == 15:",
        "        print(\"No activity on day 15\")",
        "        _____",
        "    print(f\"This is day {dailyProgram}\")"
      ],
      blanks: [
        { label: "Loop keyword", options: ["for", "while", "if"], correct: "for" },
        { label: "Range stop", options: ["30", "31", "15"], correct: "31" },
        { label: "Skip the rest of day 15", options: ["continue", "break", "pass"], correct: "continue" }
      ]
    },
    {
      id: "384300",
      title: "Nested sales reward conditions",
      type: "sequence",
      prompt: [
        "You need to write code that sends northern sales staff skis and everyone else golf balls if they exceed sales of $100,000 for a month.",
        "The staff should only get skis if the season is winter.",
        "Using drag and drop, arrange the code pieces needed in the correct order. Not every code snippet will be used."
      ],
      items: [
        "if region == \"North\" && season == \"Winter\":",
        "if region == \"North\" and season == \"Winter\":",
        "else;",
        "else:",
        "if region IS \"North\":",
        "if monthlySales > 100000:",
        "print(\"Send golf balls\")",
        "print(\"Send skis\")",
        "if monthlySales = 100000:"
      ],
      correct: [
        "if monthlySales > 100000:",
        "if region == \"North\" and season == \"Winter\":",
        "print(\"Send skis\")",
        "else:",
        "print(\"Send golf balls\")"
      ],
      slotLabel: "Line"
    },
    {
      id: "384301",
      title: "Remove cities with long names",
      type: "blanks",
      prompt: [
        "You are writing code to list cities and then delete from the list any city that has more than five letters in the name.",
        "Using the dropdown arrows, fill in the missing pieces of code to complete the code needed to fulfill this task."
      ],
      code: [
        "cities = ['Anchorage','Juneau','Fairbanks','Ketchikan','Sitka','Wasilla']",
        "for city in cities:",
        "    if _____(city) > 5:",
        "        cities._____(city)"
      ],
      blanks: [
        { label: "Length function", options: ["len", "count", "length", "size"], correct: "len" },
        { label: "Delete item", options: ["remove", "delete", "pop", "discard"], correct: "remove" }
      ]
    },
    {
      id: "384302",
      title: "Score adjustment results",
      type: "tf",
      prompt: ["For each statement regarding the results of the code, indicate Yes if the statement is true and No if false."],
      code: [
        "def score_adj(score, rank):",
        "    new_score = score",
        "    if score > 3000 and rank > 3:",
        "        new_score += 300",
        "    elif score > 2500 and rank > 2:",
        "        new_score += 250",
        "    else:",
        "        new_score += 50",
        "    return new_score",
        "",
        "score1 = score_adj(3000, 3)",
        "score2 = score_adj(2000, 2)",
        "score3 = score_adj(5000, 5)",
        "",
        "print(score1, score2, score3)"
      ],
      rows: [
        { text: "score1 = 3300", correct: "No" },
        { text: "score3 = 5300", correct: "Yes" },
        { text: "score2 = 2250", correct: "No" }
      ]
    },
    {
      id: "384303",
      title: "Generate random numbers",
      type: "sequence",
      prompt: [
        "You are trying to generate 10 sets of random numbers. One random number is between 3 and 99, with the number being a multiple of 3.",
        "The other random number needs to be between 0 and 1.",
        "Drag the snippets of code needed to complete the code block, which a small part of a game app."
      ],
      code: ["for i in range(10):"],
      items: [
        "randrange(3,102,3)",
        "randint(3,102,3)",
        "random()",
        "for i in range(9):",
        "randrange(3,99,3)",
        "randint()"
      ],
      correct: [
        "randrange(3,102,3)",
        "random()"
      ],
      slotLabel: "print argument"
    },
    {
      id: "384305",
      title: "Choose unittest assert methods",
      type: "blanks",
      prompt: [
        "A developer is setting up several assert tests for an app.",
        "Using the dropdown lists, place the applicable assert test for each unit test.",
        "test1 should test to see if a calculation is true or false.",
        "test2 should test to see if an item is within a list of items.",
        "test3 should test to see if an object belongs to a class."
      ],
      code: [
        "def test1(self):",
        "    self.____(calculation)",
        "",
        "def test2(self):",
        "    self.____(item, item_list)",
        "",
        "def test3(self):",
        "    self.____(obj, SomeClass)"
      ],
      blanks: [
        { label: "test1 assert", options: ["assertInstance", "assertIs", "assertEqual", "assertTrue", "assertIsInstance", "assertInInstance", "assertIn"], correct: "assertTrue" },
        { label: "test2 assert", options: ["assertInstance", "assertIs", "assertEqual", "assertTrue", "assertIsInstance", "assertInInstance", "assertIn"], correct: "assertIn" },
        { label: "test3 assert", options: ["assertInstance", "assertIs", "assertEqual", "assertTrue", "assertIsInstance", "assertInInstance", "assertIn"], correct: "assertIsInstance" }
      ]
    },
    {
      id: "384307",
      title: "Rectangle area input and formatting",
      type: "blanks",
      prompt: [
        "You are trying to calculate the area of a rectangle given a width and height input from a user. The width and height need to be integers. The calculated square footage needs to be right-aligned in the line and be no more than six characters long.",
        "Use the dropdown arrows to complete the code to allow a user to input the height and width and then calculate and display the area of the ensuing rectangle."
      ],
      code: [
        "width = _____(_____(\"Enter a width: \"))",
        "height = _____(_____(\"Enter a height: \"))",
        "",
        "area = \"We have _____ square feet for the area.\"",
        "print(_____)"
      ],
      blanks: [
        { label: "Width conversion", options: ["int", "float", "str"], correct: "int" },
        { label: "Width input", options: ["input", "print", "value"], correct: "input" },
        { label: "Height conversion", options: ["int", "float", "str"], correct: "int" },
        { label: "Height input", options: ["input", "print", "value"], correct: "input" },
        { label: "Formatted placeholder", options: ["{:>6}", "{:<6}", "{}", "{:.2f}"], correct: "{:>6}" },
        { label: "Print value", options: ["area.format(width * height)", "area", "width * height", "print(area)"], correct: "area.format(width * height)" }
      ]
    },
    {
      id: "384308",
      title: "sys.argv first element",
      type: "single",
      prompt: [
        "Evaluate the following code:",
        "What does sys.argv[0] represent when a command is run to refer to this file as:",
        "Python testargs.py Hello"
      ],
      code: [
        "import sys",
        "x = len(sys.argv)",
        "print(x)",
        "print(sys.argv[0])",
        "print(sys.argv[1])"
      ],
      choices: [
        "The number of arguments passed through the file.",
        "Hello",
        "testargs.py",
        "sys.argv"
      ],
      correct: "testargs.py"
    },
    {
      id: "384309",
      title: "Write and close a text file",
      type: "blanks",
      prompt: [
        "You are attempting to write code to a text file called results. The file does not exist before you write to it.",
        "Using the dropdown arrow, complete the code, making sure the file does not use memory after the write is complete."
      ],
      code: [
        "writeFile = _____('results.txt', '_____')",
        "",
        "toResults = input(\"What do you want to write to the results? \")",
        "",
        "writeFile._____(toResults)",
        "",
        "writeFile._____"
      ],
      blanks: [
        { label: "Open function", options: ["open", "file", "write"], correct: "open" },
        { label: "Write mode", options: ["w", "r", "a", "x"], correct: "w" },
        { label: "Write method", options: ["write", "read", "append"], correct: "write" },
        { label: "Close method", options: ["close()", "closed", "close"], correct: "close()" }
      ]
    },
    {
      id: "384310",
      title: "Append user text on a new line",
      type: "blanks",
      prompt: [
        "You want to write text from a user input. The file may exist, so your code needs to account for both the existence of the file and its lack.",
        "If the file does exist, new text needs to be written to a new line.",
        "Using drag and drop, finish the code. Not all options will be used."
      ],
      code: [
        "import os",
        "toResults = input(\"What do you want to write to the results? \")",
        "",
        "if os.path.isfile('results.txt'):",
        "    writeFile = open('results.txt', '_____')",
        "    writeFile.write('_____' + toResults)",
        "else:",
        "    writeFile = open('results.txt', '_____')",
        "    writeFile.write(toResults)",
        "writeFile.close()"
      ],
      blanks: [
        { label: "Existing file mode", options: ["l", "w", "e", "r", "n", "a"], correct: "a" },
        { label: "New line escape", options: ["l", "w", "e", "r", "\\n", "a"], correct: "\\n" },
        { label: "New file mode", options: ["l", "w", "e", "r", "n", "a"], correct: "w" }
      ]
    },
    {
      id: "384312",
      title: "Delete a file if it exists",
      type: "blanks",
      prompt: [
        "You are in the process of writing code to delete a file if it exists, or just display a message indicating that there was no file to remove if the file does not exist.",
        "Using the dropdown arrows, select the proper code pieces to finish this code example."
      ],
      code: [
        "import _____",
        "",
        "if os.path._____('results.txt'):",
        "    os._____('results.txt')",
        "    print(\"The results file has been removed.\")",
        "else:",
        "    print(\"There was no results file to remove.\")"
      ],
      blanks: [
        { label: "Module", options: ["os", "sys", "io"], correct: "os" },
        { label: "Existence check", options: ["isfile", "exists", "open"], correct: "isfile" },
        { label: "Delete method", options: ["remove", "delete", "unlink"], correct: "remove" }
      ]
    },
    {
      id: "384313",
      title: "Arithmetic order of operations",
      type: "single",
      prompt: ["What would be the value of result that prints at the end of this code?"],
      code: [
        "a = 3",
        "b = 7",
        "c = 5",
        "result = a + b * c",
        "print(result)"
      ],
      choices: ["36", "38", "26", "50"],
      correct: "38"
    },
    {
      id: "384314",
      title: "Math module function results",
      type: "tf",
      prompt: ["Select Yes for any true statement related to the code and No if false."],
      code: [
        "import math",
        "a = -14",
        "b = 21",
        "c = math.fabs(a)",
        "d = math.fmod(b,a)",
        "e = math.frexp(b)"
      ],
      rows: [
        { text: "frexp returns the mantissa and exponent of a number.", correct: "Yes" },
        { text: "c == 14.0", correct: "Yes" },
        { text: "d == 1.5", correct: "No" }
      ]
    },
    {
      id: "384316",
      title: "Match expressions to default data types",
      type: "matching",
      prompt: ["Using drag and drop, match each expression with its proper default data type."],
      options: ["Boolean", "Integer", "String", "Float"],
      matches: [
        { term: "\"False\"", correct: "String" },
        { term: "1.0", correct: "Float" },
        { term: "False", correct: "Boolean" },
        { term: "1", correct: "Integer" }
      ]
    },
    {
      id: "384317",
      title: "Passing assert statement output",
      type: "single",
      prompt: ["What will the code return?"],
      code: [
        "def is_quarter(num):",
        "    if num % 4 == 0:",
        "        return True",
        "    else:",
        "        return False",
        "assert is_quarter(8) == True"
      ],
      choices: ["True", "An AssertionError error.", "False", "Nothing"],
      correct: "Nothing"
    },
    {
      id: "384318",
      title: "Not equal operator",
      type: "blanks",
      prompt: [
        "You are building a quiz app. The code is missing an operator to indicate that a variable is not equal to a desired result.",
        "Using the dropdown arrow, choose the correct operator to finish the code."
      ],
      code: [
        "a = 3",
        "b = 7",
        "result = int(input(\"What is a + b?\"))",
        "if result _____ 10:",
        "    print(\"You are incorrect. Try again\")",
        "else:",
        "    print(\"You are correct.\")"
      ],
      blanks: [
        { label: "Not equal", options: ["!=", "==", "=", "<=", ">="], correct: "!=" }
      ]
    },
    {
      id: "384319",
      title: "Exponent and unary operator results",
      type: "tf",
      prompt: ["For each statement regarding the results of the calculations, select Yes if the statement is true and No if false."],
      code: [
        "a = 3",
        "b = 2",
        "c = -(a**b)",
        "d = +(c*b)"
      ],
      rows: [
        { text: "c = -9", correct: "Yes" },
        { text: "b**a = 8", correct: "Yes" },
        { text: "d = 18", correct: "No" }
      ]
    },
    {
      id: "384320",
      title: "Slice a tuple for testing",
      type: "sequence",
      prompt: [
        "A tester wants to select every fifth item in the products tuple for functional testing, starting with the second item and ending at the ninth item.",
        "The result of that selection should be in the print statement.",
        "Using drag and drop, fill in the missing code pieces to create the selection and the print statement. Not all code pieces will be used."
      ],
      code: ["products = ('1111','2222','3333','4444','5555','6666','7777','8888','9999')"],
      items: [
        "tester = slice(2,9,5)",
        "tester = products.slice(1,8,5)",
        "products[tester]",
        "for tester in products:",
        "products(tester)",
        "append",
        "tester = slice(1,8,5)"
      ],
      correct: [
        "tester = slice(1,8,5)",
        "products[tester]"
      ],
      slotLabel: "Blank"
    },
    {
      id: "384322",
      title: "Merge and edit league lists",
      type: "blanks",
      prompt: [
        "A set of softball leagues has two divisions merging into one division. The completed list should look like this:",
        "['Angels', 'Dodgers', 'Padres', 'Sox', 'Wheelers']",
        "Using the dropdown arrows, complete the code necessary to show the end result."
      ],
      code: [
        "league1 = ['Angels','Dodgers','Padres']",
        "league2 = ['Wheelers','Blasters']",
        "",
        "league0 = league1 _____ league2",
        "league0._____(_____, 'Sox')",
        "league0._____('Blasters')",
        "",
        "print(league0)"
      ],
      blanks: [
        { label: "Combine operator", options: ["+", "append", "extend", "-"], correct: "+" },
        { label: "Add Sox method", options: ["insert", "append", "add", "remove"], correct: "insert" },
        { label: "Sox index", options: ["3", "4", "0", "Sox"], correct: "3" },
        { label: "Remove Blasters method", options: ["remove", "pop", "delete", "discard"], correct: "remove" }
      ]
    },
    {
      id: "384324",
      title: "Nested city and state loops",
      type: "blanks",
      prompt: [
        "A developer is writing code to iterate printing cities and states, with the result looking like this:",
        "Orange Florida\nOrange Ohio\nOrange Illinois\nSpringfield Florida\nSpringfield Ohio\nSpringfield Illinois\nCapital\nAuburn Florida\nAuburn Ohio\nAuburn Illinois",
        "The first two lines of code are as follows:",
        "cities = [\"Orange\", \"Springfield\", \"Auburn\"]\nstates = [\"Florida\", \"Ohio\", \"Illinois\"]",
        "Using the dropdown arrows, complete the code to generate the above output."
      ],
      code: [
        "cities = [\"Orange\", \"Springfield\", \"Auburn\"]",
        "states = [\"Florida\", \"Ohio\", \"Illinois\"]",
        "",
        "_____ x in cities:",
        "    _____ y in states:",
        "        print(x, y)",
        "        _____ x == \"Springfield\" and y == \"Illinois\":",
        "            print(\"Capital\")"
      ],
      blanks: [
        { label: "Outer loop", options: ["for", "if", "while"], correct: "for" },
        { label: "Inner loop", options: ["for", "if", "while"], correct: "for" },
        { label: "Capital condition", options: ["if", "elif", "for"], correct: "if" }
      ]
    },
    {
      id: "384325",
      title: "Advanced math calculations",
      type: "blanks",
      prompt: [
        "You are demonstrating how to use Python to perform advanced math calculations.",
        "Using drag and drop, fill in the missing pieces of the code to accomplish these goals:",
        "c = 3 raised to the second power",
        "d = the square root of a",
        "e = the whole number of the square root of b",
        "Not every code piece will be used."
      ],
      code: [
        "import _____",
        "",
        "a = 3",
        "b = 2",
        "",
        "c = math._____(_____)",
        "d = math._____",
        "e = math._____"
      ],
      blanks: [
        { label: "Module", options: ["math", "pow", "sq(a)", "isq(b)", "1, 3", "a, b", "sq(b)", "isq(a)", "**", "isqrt(b)", "sqrt(a)", "isqrt(a)"], correct: "math" },
        { label: "Power function", options: ["math", "pow", "sq(a)", "isq(b)", "1, 3", "a, b", "sq(b)", "isq(a)", "**", "isqrt(b)", "sqrt(a)", "isqrt(a)"], correct: "pow" },
        { label: "Power arguments", options: ["math", "pow", "sq(a)", "isq(b)", "1, 3", "a, b", "sq(b)", "isq(a)", "**", "isqrt(b)", "sqrt(a)", "isqrt(a)"], correct: "a, b" },
        { label: "Square root of a", options: ["math", "pow", "sq(a)", "isq(b)", "1, 3", "a, b", "sq(b)", "isq(a)", "**", "isqrt(b)", "sqrt(a)", "isqrt(a)"], correct: "sqrt(a)" },
        { label: "Whole square root of b", options: ["math", "pow", "sq(a)", "isq(b)", "1, 3", "a, b", "sq(b)", "isq(a)", "**", "isqrt(b)", "sqrt(a)", "isqrt(a)"], correct: "isqrt(b)" }
      ]
    },
    {
      id: "384326",
      title: "Define an area function",
      type: "single",
      prompt: [
        "A junior programmer is building a function to compute the area of a rectangle.",
        "Which function definition statement is needed to replace the comment to make this code work?"
      ],
      code: [
        "#declare function here",
        "    z = x * y",
        "    print(z)",
        "",
        "area(5,10)"
      ],
      choices: ["def area (x,y):", "def area (x,y,z):", "def calculate_area (x,y):", "def calculate_area (x,y,z):"],
      correct: "def area (x,y):"
    },
    {
      id: "384881",
      title: "Valid unittest method name",
      type: "single",
      prompt: [
        "The following code is used to set up a unit test between two variables.",
        "Of the function names given, which is valid for building the unit test?"
      ],
      code: [
        "import unittest",
        "",
        "class TestMain(unittest.TestCase):",
        "    def ________________(self):",
        "        a = 'North'",
        "        b = 'North'",
        "        self.assertEqual(a,b)",
        "if __name__ == '__main__':",
        "    unittest.main()"
      ],
      choices: ["test_territory", "_test_territory", "testcase_territory", "territory_test"],
      correct: "test_territory"
    },
    {
      id: "445789",
      title: "Format cost with the modulo operator",
      type: "single",
      prompt: [
        "This code is used to calculate the total cost for renting storage space for a day. The total cost is not printed as a dollar amount, as the number of decimal places varies.",
        "Which print statement would produce the total cost as two decimals, using the Modulo operator?"
      ],
      code: [
        "length = 12.5",
        "price = 2.99",
        "cost = length * price",
        "print(\"Your total cost is\", cost)"
      ],
      choices: [
        "print(\"Your total cost is \", round(cost))",
        "print (\"Your total cost is {:.2f}\" % (cost))",
        "print (\"Your total cost is %.2f\" % (cost))",
        "print(\"Your total cost is \",math.floor(cost))"
      ],
      correct: "print (\"Your total cost is %.2f\" % (cost))"
    },
    {
      id: "445791",
      title: "Operator precedence groups",
      type: "matching",
      prompt: ["Using drag and drop, arrange the operator groups in descending precedence (highest to lowest)."],
      options: ["4", "3", "2", "1"],
      matches: [
        { term: "Logical", correct: "2" },
        { term: "Comparison / Membership / Identity", correct: "3" },
        { term: "Arithmetic", correct: "4" },
        { term: "Assignments", correct: "1" }
      ],
      note: "Arithmetic operators have higher precedence than comparison/membership/identity, then logical operators, then assignment."
    },
    {
      id: "445792",
      title: "Open a configuration file",
      type: "blanks",
      prompt: [
        "An app needs to read information from a configuration file, named config.txt and possibly add to the configuration file if the file is present in a home directory. If the file does not exist, it needs to be open for write purposes.",
        "Using the drop-down arrows, fill in the code necessary to complete this task."
      ],
      code: [
        "import _____",
        "",
        "if _____('config.txt'):",
        "    writeFile = open('config.txt', '_____')",
        "else:",
        "    writeFile = open('config.txt', '_____')"
      ],
      blanks: [
        { label: "Module", options: ["os", "sys", "io"], correct: "os" },
        { label: "File check", options: ["os.path.isfile", "os.path.exists", "open"], correct: "os.path.isfile" },
        { label: "Existing file mode", options: ["r+", "w+", "a", "r"], correct: "r+" },
        { label: "Missing file mode", options: ["r+", "w+", "a", "r"], correct: "w+" }
      ]
    },
    {
      id: "446232",
      title: "Match data structures to characteristics",
      type: "matching",
      prompt: [
        "A new developer is trying to understand the differences among data structures.",
        "Using drag and drop, match each code example with its characteristic."
      ],
      options: [
        "Values are editable.",
        "Values can be added or removed, but not edited.",
        "An immutable list.",
        "Represents a dictionary."
      ],
      matches: [
        { term: "offices = {'location': 'East', 'size': '4500'}", correct: "Represents a dictionary." },
        { term: "background_colors = ['yellow','slate','lightblue']", correct: "Values are editable." },
        { term: "departments = ('Sales','Marketing','Operations','IT')", correct: "An immutable list." },
        { term: "locations = {'HQ','West','Remote1'}", correct: "Values can be added or removed, but not edited." }
      ]
    },
    {
      id: "446234",
      title: "Highest and lowest attendance",
      type: "blanks",
      prompt: [
        "You have daily attendance figures for a conference and want to know the highest and lowest counts.",
        "Using the dropdown arrows, fill in the missing code pieces to obtain those amounts."
      ],
      code: [
        "attendance = [300,250,200,400,150,225,325]",
        "",
        "print(_____(attendance))",
        "print(_____(attendance))"
      ],
      blanks: [
        { label: "Highest count", options: ["max", "min", "sum", "len"], correct: "max" },
        { label: "Lowest count", options: ["max", "min", "sum", "len"], correct: "min" }
      ]
    },
    {
      id: "447064",
      title: "Compound assignment results",
      type: "tf",
      prompt: ["For the following code, select Yes if the statement is true and No if false."],
      code: [
        "a = 100",
        "b = 15",
        "c = 10",
        "a += b",
        "b -= c",
        "a %= b"
      ],
      rows: [
        { text: "a = 115", correct: "Yes" },
        { text: "b = 5", correct: "Yes" },
        { text: "c = 10", correct: "Yes" }
      ]
    }
]
;

  var state = {
    index: 0,
    visible: QUESTIONS.slice(),
    answers: {},
    submitted: false,
    results: null,
    drag: null
  };

  var els = {};

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function encodeValue(value) {
    return encodeURIComponent(String(value));
  }

  function decodeValue(value) {
    return decodeURIComponent(String(value || ""));
  }

  function normalize(value) {
    return String(value == null ? "" : value)
      .trim()
      .replace(/\s+/g, " ");
  }

  function sameValue(a, b) {
    return normalize(a) === normalize(b);
  }

  function sameSet(user, correct) {
    var a = (user || []).map(normalize).sort();
    var b = (correct || []).map(normalize).sort();
    return a.length === b.length && a.every(function (item, idx) {
      return item === b[idx];
    });
  }

  function questionNumber(question) {
    return QUESTIONS.indexOf(question) + 1;
  }

  function getCurrentQuestion() {
    return state.visible[state.index] || null;
  }

  function getAnswer(id) {
    return state.answers[id];
  }

  function setAnswer(id, value) {
    state.answers[id] = value;
    state.submitted = false;
    state.results = null;
    saveAnswers();
    updateStats();
    renderIndex();
  }

  function loadAnswers() {
    try {
      var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (data && data.answers) state.answers = data.answers;
    } catch (e) {
      state.answers = {};
    }
  }

  function saveAnswers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers }));
  }

  function clearAnswers() {
    state.answers = {};
    state.submitted = false;
    state.results = null;
    saveAnswers();
    renderQuestion();
    updateStats();
  }

  function getCorrectAnswer(question) {
    if (question.type === "tf") return question.rows.map(function (row) { return row.correct; });
    if (question.type === "blanks") return question.blanks.map(function (blank) { return blank.correct; });
    if (question.type === "matching") return question.matches.map(function (match) { return match.correct; });
    if (question.type === "sequence") return question.correct.slice();
    if (question.type === "multi") return question.correct.slice();
    return question.correct;
  }

  function isAnswered(question) {
    var value = getAnswer(question.id);
    if (question.type === "tf") {
      return Array.isArray(value) && value.length === question.rows.length && value.every(Boolean);
    }
    if (question.type === "blanks") {
      return Array.isArray(value) && value.length === question.blanks.length && value.every(function (item) {
        return normalize(item);
      });
    }
    if (question.type === "matching") {
      return Array.isArray(value) && value.length === question.matches.length && value.every(Boolean);
    }
    if (question.type === "sequence") {
      return Array.isArray(value) && value.length === question.correct.length && value.every(Boolean);
    }
    if (question.type === "multi") {
      return Array.isArray(value) && value.length > 0;
    }
    return !!normalize(value);
  }

  function gradeQuestion(question) {
    var value = getAnswer(question.id);
    var correct = false;

    if (question.type === "tf") {
      correct = Array.isArray(value) && question.rows.every(function (row, idx) {
        return sameValue(value[idx], row.correct);
      });
    } else if (question.type === "blanks") {
      correct = Array.isArray(value) && question.blanks.every(function (blank, idx) {
        return sameValue(value[idx], blank.correct);
      });
    } else if (question.type === "matching") {
      correct = Array.isArray(value) && question.matches.every(function (match, idx) {
        return sameValue(value[idx], match.correct);
      });
    } else if (question.type === "sequence") {
      correct = Array.isArray(value) && question.correct.every(function (line, idx) {
        return sameValue(value[idx], line);
      });
    } else if (question.type === "multi") {
      correct = sameSet(value, question.correct);
    } else {
      correct = sameValue(value, question.correct);
    }

    return {
      id: question.id,
      question: question,
      correct: correct,
      answered: isAnswered(question),
      user: value,
      expected: getCorrectAnswer(question)
    };
  }

  function gradeExam() {
    var items = QUESTIONS.map(gradeQuestion);
    var score = items.filter(function (result) { return result.correct; }).length;
    state.results = { items: items, score: score, total: QUESTIONS.length };
    state.submitted = true;
    renderResults();
    renderIndex();
  }

  function answeredCount() {
    return QUESTIONS.filter(isAnswered).length;
  }

  function updateStats() {
    els.answeredCount.textContent = String(answeredCount());
  }

  function resultFor(question) {
    if (!state.results) return null;
    return state.results.items.find(function (item) {
      return item.id === question.id;
    });
  }

  function renderIndex() {
    if (!els.questionIndex) return;
    if (!state.visible.length) {
      els.questionIndex.innerHTML = '<div class="empty-state">Nicio intrebare gasita.</div>';
      return;
    }

    els.questionIndex.innerHTML = state.visible.map(function (question, idx) {
      var n = questionNumber(question);
      var classes = ["exam-index__btn"];
      var result = resultFor(question);
      if (idx === state.index) classes.push("is-active");
      if (isAnswered(question)) classes.push("is-answered");
      if (result && result.correct) classes.push("is-correct");
      if (result && !result.correct) classes.push("is-wrong");
      return (
        '<button type="button" class="' +
        classes.join(" ") +
        '" data-visible-index="' +
        idx +
        '" aria-label="Open question ' +
        n +
        '">' +
        n +
        "</button>"
      );
    }).join("");
  }

  function renderContext(question) {
    var html = '<div class="question-body">';
    question.prompt.forEach(function (paragraph) {
      html += "<p>" + escapeHtml(paragraph) + "</p>";
    });
    if (question.facts && question.facts.length) {
      html += '<ul class="question-list">';
      question.facts.forEach(function (fact) {
        html += "<li>" + escapeHtml(fact) + "</li>";
      });
      html += "</ul>";
    }
    if (question.code && question.code.length) {
      html += '<pre class="question-code"><code>' + escapeHtml(question.code.join("\n")) + "</code></pre>";
    }
    html += "</div>";
    return html;
  }

  function renderControls(question) {
    if (question.type === "tf") return renderTrueFalse(question);
    if (question.type === "single") return renderSingle(question);
    if (question.type === "multi") return renderMulti(question);
    if (question.type === "blanks") return renderBlanks(question);
    if (question.type === "matching") return renderMatching(question);
    if (question.type === "sequence") return renderSequence(question);
    if (question.type === "input") return renderInput(question);
    return "";
  }

  function renderTrueFalse(question) {
    var value = getAnswer(question.id) || [];
    var html = '<table class="answer-input-table"><thead><tr><th>Statement</th><th>Yes</th><th>No</th></tr></thead><tbody>';
    question.rows.forEach(function (row, idx) {
      var yesChecked = value[idx] === "Yes" ? " checked" : "";
      var noChecked = value[idx] === "No" ? " checked" : "";
      html += "<tr><td>" + escapeHtml(row.text) + "</td>";
      html += '<td><label class="choice-dot"><input type="radio" name="q-' + question.id + "-row-" + idx + '" data-qid="' + question.id + '" data-type="tf" data-index="' + idx + '" value="Yes"' + yesChecked + "><span>Yes</span></label></td>";
      html += '<td><label class="choice-dot"><input type="radio" name="q-' + question.id + "-row-" + idx + '" data-qid="' + question.id + '" data-type="tf" data-index="' + idx + '" value="No"' + noChecked + "><span>No</span></label></td>";
      html += "</tr>";
    });
    html += "</tbody></table>";
    return html;
  }

  function renderSingle(question) {
    var value = getAnswer(question.id);
    var html = '<div class="choice-list">';
    question.choices.forEach(function (choice, idx) {
      var checked = sameValue(value, choice) ? " checked" : "";
      html += '<label class="choice-card">';
      html += '<input type="radio" name="q-' + question.id + '" data-qid="' + question.id + '" data-type="single" value="' + escapeHtml(choice) + '"' + checked + ">";
      html += '<span class="choice-card__letter">' + String.fromCharCode(65 + idx) + "</span>";
      html += '<span class="choice-card__text">' + escapeHtml(choice) + "</span>";
      html += "</label>";
    });
    html += "</div>";
    return html;
  }

  function renderMulti(question) {
    var value = getAnswer(question.id) || [];
    var html = '<p class="control-hint">Alege toate raspunsurile corecte.</p><div class="choice-list">';
    question.choices.forEach(function (choice, idx) {
      var checked = value.some(function (item) { return sameValue(item, choice); }) ? " checked" : "";
      html += '<label class="choice-card">';
      html += '<input type="checkbox" data-qid="' + question.id + '" data-type="multi" value="' + escapeHtml(choice) + '"' + checked + ">";
      html += '<span class="choice-card__letter">' + String.fromCharCode(65 + idx) + "</span>";
      html += '<span class="choice-card__text">' + escapeHtml(choice) + "</span>";
      html += "</label>";
    });
    html += "</div>";
    return html;
  }

  function renderBlanks(question) {
    var value = getAnswer(question.id) || [];
    var html = '<div class="blank-grid">';
    question.blanks.forEach(function (blank, idx) {
      html += '<label class="blank-control">';
      html += '<span class="blank-control__label">' + escapeHtml(blank.label) + "</span>";
      if (blank.options && blank.options.length) {
        html += '<select data-qid="' + question.id + '" data-type="blank" data-index="' + idx + '">';
        html += '<option value="">Choose One...</option>';
        blank.options.forEach(function (option) {
          var selected = sameValue(value[idx], option) ? " selected" : "";
          html += '<option value="' + escapeHtml(option) + '"' + selected + ">" + escapeHtml(option) + "</option>";
        });
        html += "</select>";
      } else {
        html += '<input type="text" data-qid="' + question.id + '" data-type="blank" data-index="' + idx + '" value="' + escapeHtml(value[idx] || "") + '">';
      }
      html += "</label>";
    });
    html += "</div>";
    return html;
  }

  function renderMatching(question) {
    var value = getAnswer(question.id) || [];
    var html = '<table class="matching-table"><thead><tr><th>Method</th><th>Module</th></tr></thead><tbody>';
    question.matches.forEach(function (match, idx) {
      html += "<tr><td><code>" + escapeHtml(match.term) + "</code></td><td>";
      html += '<select data-qid="' + question.id + '" data-type="matching" data-index="' + idx + '">';
      html += '<option value="">Choose One...</option>';
      question.options.forEach(function (option) {
        var selected = sameValue(value[idx], option) ? " selected" : "";
        html += '<option value="' + escapeHtml(option) + '"' + selected + ">" + escapeHtml(option) + "</option>";
      });
      html += "</select></td></tr>";
    });
    html += "</tbody></table>";
    return html;
  }

  function renderSequence(question) {
    var value = getAnswer(question.id);
    if (!Array.isArray(value) || value.length !== question.correct.length) {
      value = new Array(question.correct.length).fill("");
    }
    var used = value.filter(Boolean);
    var bank = question.items.filter(function (item) {
      return !used.some(function (selected) { return sameValue(selected, item); });
    });
    var html = '<div class="sequence-board" data-qid="' + question.id + '">';
    html += '<div class="sequence-bank" data-drop-target="bank"><div class="sequence-title">Available code lines</div>';
    bank.forEach(function (item) {
      html += renderDragItem(question.id, item, "bank", "");
    });
    html += "</div>";
    html += '<div class="sequence-slots"><div class="sequence-title">Your order</div>';
    value.forEach(function (item, idx) {
      html += '<div class="sequence-slot" data-drop-target="slot" data-qid="' + question.id + '" data-index="' + idx + '">';
      html += '<span class="sequence-slot__label">' + escapeHtml(question.slotLabel || "Line") + " " + (idx + 1) + "</span>";
      if (item) {
        html += renderDragItem(question.id, item, "slot", idx);
        html += '<button type="button" class="sequence-remove" data-qid="' + question.id + '" data-index="' + idx + '" aria-label="Remove line"><span class="material-icons-outlined">close</span></button>';
      } else {
        html += '<span class="sequence-empty">Drop line here</span>';
      }
      html += "</div>";
    });
    html += "</div></div>";
    html += '<p class="control-hint">Trage liniile in casutele din dreapta sau apasa pe o linie pentru a o pune in primul loc liber.</p>';
    return html;
  }

  function renderDragItem(qid, item, source, index) {
    return (
      '<button type="button" class="sequence-item" draggable="true" data-drag-value="' +
      encodeValue(item) +
      '" data-drag-source="' +
      source +
      '" data-qid="' +
      qid +
      '" data-index="' +
      index +
      '">' +
      '<span class="sequence-item__text">' +
      escapeHtml(item) +
      '</span><span class="material-icons-outlined sequence-item__icon" aria-hidden="true">drag_indicator</span></button>'
    );
  }

  function renderInput(question) {
    var value = getAnswer(question.id) || "";
    return (
      '<label class="text-answer"><span>Raspunsul tau</span><input type="' +
      (question.inputType || "text") +
      '" data-qid="' +
      question.id +
      '" data-type="input" value="' +
      escapeHtml(value) +
      '" placeholder="Input Answer"></label>'
    );
  }

  function formatAnswerValue(value) {
    if (Array.isArray(value)) {
      if (!value.length) return "Niciun raspuns";
      return value.map(function (item, idx) {
        return (idx + 1) + ". " + (item || "[gol]");
      }).join("\n");
    }
    return normalize(value) || "Niciun raspuns";
  }

  function renderReview(question) {
    if (!state.submitted) return "";
    var result = resultFor(question);
    if (!result) return "";
    var status = result.correct ? "Corect" : "Gresit";
    var html = '<section class="answer-box ' + (result.correct ? "answer-box--correct" : "answer-box--wrong") + '">';
    html += '<div class="answer-box__head"><span class="material-icons-outlined" aria-hidden="true">' + (result.correct ? "check_circle" : "error") + "</span>" + status + "</div>";
    html += '<div class="answer-box__content">';
    html += '<div class="review-grid">';
    html += '<div><h3>Raspunsul tau</h3><pre class="answer-code"><code>' + escapeHtml(formatAnswerValue(result.user)) + "</code></pre></div>";
    html += '<div><h3>Raspuns corect</h3><pre class="answer-code"><code>' + escapeHtml(formatAnswerValue(result.expected)) + "</code></pre></div>";
    html += "</div>";
    if (question.note) html += '<p class="question-note">' + escapeHtml(question.note) + "</p>";
    html += "</div></section>";
    return html;
  }

  function renderQuestion() {
    var question = getCurrentQuestion();
    renderIndex();
    updateStats();

    if (!question) {
      els.questionPosition.textContent = "0/0";
      els.prevQuestion.disabled = true;
      els.nextQuestion.disabled = true;
      els.questionPanel.innerHTML = '<div class="empty-state">Nu exista rezultate pentru cautarea curenta.</div>';
      return;
    }

    var n = questionNumber(question);
    els.questionPosition.textContent = n + "/" + QUESTIONS.length;
    els.prevQuestion.disabled = state.index <= 0;
    els.nextQuestion.disabled = state.index >= state.visible.length - 1;

    var html = "";
    html += '<header class="question-head">';
    html += "<div>";
    html += '<p class="question-kicker">Question ' + n + " / ID " + escapeHtml(question.id) + "</p>";
    html += '<h2 class="question-title">' + escapeHtml(question.title) + "</h2>";
    html += "</div>";
    html += '<div class="question-status ' + (isAnswered(question) ? "is-answered" : "") + '">' + (isAnswered(question) ? "Raspuns completat" : "Necompletat") + "</div>";
    html += "</header>";
    html += renderContext(question);
    html += '<section class="question-controls" aria-label="Answer controls">' + renderControls(question) + "</section>";
    html += renderReview(question);
    els.questionPanel.innerHTML = html;
  }

  function setIndex(nextIndex) {
    if (!state.visible.length) {
      state.index = 0;
      renderQuestion();
      return;
    }
    state.index = Math.max(0, Math.min(nextIndex, state.visible.length - 1));
    renderQuestion();
  }

  function applySearch() {
    var term = els.search.value.trim().toLowerCase();
    state.visible = QUESTIONS.filter(function (question) {
      if (!term) return true;
      var haystack = [
        question.id,
        question.title,
        (question.prompt || []).join(" "),
        (question.code || []).join(" "),
        (question.facts || []).join(" "),
        JSON.stringify(getCorrectAnswer(question)),
        JSON.stringify(question.choices || []),
        JSON.stringify(question.items || [])
      ].join(" ").toLowerCase();
      return haystack.indexOf(term) !== -1;
    });
    state.index = 0;
    renderQuestion();
  }

  function updateArrayAnswer(qid, idx, value) {
    var question = QUESTIONS.find(function (item) { return item.id === qid; });
    if (!question) return;
    var length = 1;
    if (question.type === "tf") length = question.rows.length;
    if (question.type === "blanks") length = question.blanks.length;
    if (question.type === "matching") length = question.matches.length;
    var next = Array.isArray(getAnswer(qid)) ? getAnswer(qid).slice() : new Array(length).fill("");
    next[idx] = value;
    setAnswer(qid, next);
  }

  function bindFormEvents() {
    els.questionPanel.addEventListener("change", function (event) {
      var input = event.target.closest("[data-qid]");
      if (!input) return;
      var qid = input.getAttribute("data-qid");
      var type = input.getAttribute("data-type");
      if (type === "tf" || type === "blank" || type === "matching") {
        updateArrayAnswer(qid, parseInt(input.getAttribute("data-index"), 10), input.value);
      } else if (type === "single") {
        setAnswer(qid, input.value);
      } else if (type === "multi") {
        var current = Array.isArray(getAnswer(qid)) ? getAnswer(qid).slice() : [];
        if (input.checked) current.push(input.value);
        else current = current.filter(function (item) { return !sameValue(item, input.value); });
        setAnswer(qid, current);
      } else if (type === "input") {
        setAnswer(qid, input.value);
      }
    });

    els.questionPanel.addEventListener("input", function (event) {
      var input = event.target.closest('input[data-type="input"], input[data-type="blank"]');
      if (!input) return;
      var qid = input.getAttribute("data-qid");
      var type = input.getAttribute("data-type");
      if (type === "input") setAnswer(qid, input.value);
      if (type === "blank") updateArrayAnswer(qid, parseInt(input.getAttribute("data-index"), 10), input.value);
    });
  }

  function getSequenceValue(qid) {
    var question = QUESTIONS.find(function (item) { return item.id === qid; });
    var length = question ? question.correct.length : 0;
    var value = getAnswer(qid);
    if (!Array.isArray(value) || value.length !== length) return new Array(length).fill("");
    return value.slice();
  }

  function placeSequenceItem(qid, value, targetIndex) {
    var next = getSequenceValue(qid).map(function (item) {
      return sameValue(item, value) ? "" : item;
    });
    if (targetIndex == null) {
      targetIndex = next.findIndex(function (item) { return !item; });
    }
    if (targetIndex < 0) return;
    next[targetIndex] = value;
    setAnswer(qid, next);
    renderQuestion();
  }

  function removeSequenceItem(qid, index) {
    var next = getSequenceValue(qid);
    next[index] = "";
    setAnswer(qid, next);
    renderQuestion();
  }

  function bindSequenceEvents() {
    els.questionPanel.addEventListener("click", function (event) {
      var remove = event.target.closest(".sequence-remove");
      if (remove) {
        removeSequenceItem(remove.getAttribute("data-qid"), parseInt(remove.getAttribute("data-index"), 10));
        return;
      }

      var bankItem = event.target.closest('.sequence-item[data-drag-source="bank"]');
      if (bankItem) {
        placeSequenceItem(bankItem.getAttribute("data-qid"), decodeValue(bankItem.getAttribute("data-drag-value")), null);
      }
    });

    els.questionPanel.addEventListener("dragstart", function (event) {
      var item = event.target.closest(".sequence-item");
      if (!item) return;
      state.drag = {
        qid: item.getAttribute("data-qid"),
        value: decodeValue(item.getAttribute("data-drag-value")),
        source: item.getAttribute("data-drag-source"),
        index: item.getAttribute("data-index")
      };
      event.dataTransfer.setData("text/plain", state.drag.value);
      event.dataTransfer.effectAllowed = "move";
    });

    els.questionPanel.addEventListener("dragover", function (event) {
      if (event.target.closest("[data-drop-target]")) {
        event.preventDefault();
      }
    });

    els.questionPanel.addEventListener("drop", function (event) {
      var drop = event.target.closest("[data-drop-target]");
      if (!drop || !state.drag) return;
      event.preventDefault();
      var qid = state.drag.qid;
      if (drop.getAttribute("data-drop-target") === "bank") {
        if (state.drag.source === "slot") removeSequenceItem(qid, parseInt(state.drag.index, 10));
      } else {
        placeSequenceItem(qid, state.drag.value, parseInt(drop.getAttribute("data-index"), 10));
      }
      state.drag = null;
    });
  }

  function renderResults() {
    var items = state.results.items;
    var wrong = items.filter(function (item) { return !item.correct; });
    var pct = Math.round((state.results.score / state.results.total) * 100);
    var html = '<section class="results-panel">';
    html += '<div class="results-hero">';
    html += '<p class="exam-summary__eyebrow">Rezultat final</p>';
    html += '<h2>' + state.results.score + " / " + state.results.total + " corecte</h2>";
    html += '<div class="results-score">' + pct + "%</div>";
    html += "</div>";
    html += '<div class="results-actions">';
    html += '<button type="button" class="exam-nav-btn" id="reviewFirstWrong"><span class="material-icons-outlined">error</span>Prima greseala</button>';
    html += '<button type="button" class="exam-nav-btn" id="reviewAllQuestions"><span class="material-icons-outlined">list</span>Revizuieste intrebarile</button>';
    html += "</div>";
    html += '<div class="results-list">';
    items.forEach(function (result) {
      var q = result.question;
      html += '<article class="result-card ' + (result.correct ? "is-correct" : "is-wrong") + '">';
      html += '<div><p class="question-kicker">Question ' + questionNumber(q) + " / ID " + escapeHtml(q.id) + "</p>";
      html += '<h3>' + escapeHtml(q.title) + "</h3></div>";
      html += '<span class="result-badge">' + (result.correct ? "Corect" : "Gresit") + "</span>";
      html += '<pre class="answer-code"><code>Raspunsul tau:\n' + escapeHtml(formatAnswerValue(result.user)) + "\n\nRaspuns corect:\n" + escapeHtml(formatAnswerValue(result.expected)) + "</code></pre>";
      html += '<button type="button" class="result-review" data-review-id="' + escapeHtml(q.id) + '">Vezi intrebarea</button>';
      html += "</article>";
    });
    html += "</div>";
    if (!wrong.length) html += '<p class="question-note">Toate raspunsurile sunt corecte.</p>';
    html += "</section>";
    els.questionPanel.innerHTML = html;
    els.questionPosition.textContent = "Rezultat";
    els.prevQuestion.disabled = true;
    els.nextQuestion.disabled = true;
  }

  function bindResultsEvents() {
    els.questionPanel.addEventListener("click", function (event) {
      var review = event.target.closest("[data-review-id]");
      if (review) {
        var id = review.getAttribute("data-review-id");
        var visibleIndex = state.visible.findIndex(function (q) { return q.id === id; });
        if (visibleIndex === -1) {
          state.visible = QUESTIONS.slice();
          visibleIndex = QUESTIONS.findIndex(function (q) { return q.id === id; });
          els.search.value = "";
        }
        setIndex(visibleIndex);
        return;
      }

      if (event.target.closest("#reviewFirstWrong")) {
        var firstWrong = state.results.items.find(function (item) { return !item.correct; });
        if (firstWrong) {
          state.visible = QUESTIONS.slice();
          els.search.value = "";
          setIndex(QUESTIONS.indexOf(firstWrong.question));
        }
        return;
      }

      if (event.target.closest("#reviewAllQuestions")) {
        state.visible = QUESTIONS.slice();
        els.search.value = "";
        setIndex(0);
      }
    });
  }

  function bindEvents() {
    els.questionIndex.addEventListener("click", function (event) {
      var button = event.target.closest("[data-visible-index]");
      if (!button) return;
      setIndex(parseInt(button.getAttribute("data-visible-index"), 10));
    });

    els.prevQuestion.addEventListener("click", function () {
      setIndex(state.index - 1);
    });

    els.nextQuestion.addEventListener("click", function () {
      setIndex(state.index + 1);
    });

    els.search.addEventListener("input", applySearch);
    els.verifyExam.addEventListener("click", gradeExam);
    els.resetExam.addEventListener("click", clearAnswers);

    document.addEventListener("keydown", function (event) {
      if (event.target && /input|textarea|select/i.test(event.target.tagName)) return;
      if (event.key === "ArrowLeft") setIndex(state.index - 1);
      if (event.key === "ArrowRight") setIndex(state.index + 1);
    });

    bindFormEvents();
    bindSequenceEvents();
    bindResultsEvents();
  }

  function init() {
    els.questionCount = document.getElementById("questionCount");
    els.answeredCount = document.getElementById("answeredCount");
    els.questionIndex = document.getElementById("questionIndex");
    els.questionPanel = document.getElementById("questionPanel");
    els.questionPosition = document.getElementById("questionPosition");
    els.prevQuestion = document.getElementById("prevQuestion");
    els.nextQuestion = document.getElementById("nextQuestion");
    els.search = document.getElementById("examSearch");
    els.verifyExam = document.getElementById("verifyExam");
    els.resetExam = document.getElementById("resetExam");

    els.questionCount.textContent = String(QUESTIONS.length);
    loadAnswers();
    bindEvents();
    renderQuestion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


