(function () {
  var STORAGE_KEY = "gmetrix-python-practice-exam-1-answers";

  var QUESTIONS = [
    {
      id: "384100",
      title: "Data types and Boolean values",
      type: "tf",
      prompt: ["Evaluate each situation regarding data types and answer Yes if it is true or No if false."],
      rows: [
        { text: "Python makes the distinction between integers and floating variables.", correct: "Yes" },
        { text: "When declaring variables in Python, a data type must be specified.", correct: "No" },
        { text: "When setting a Boolean variable, the value must start with a capital letter.", correct: "Yes" }
      ],
      note: "Python has int and float values, variables do not need declared types, and Boolean literals are True and False."
    },
    {
      id: "384101",
      title: "Convert values for a printed message",
      type: "blanks",
      prompt: [
        "A developer wants to make sure a serial number cannot be used in a calculation and that a dollar amount entered as a whole number can have decimals.",
        "The message should display exactly: The serial number of the product is 55555 and it will cost 44.0."
      ],
      code: [
        "serialNumber = _____(55555)",
        "amount = _____(44)",
        "print(\"The serial number of the product is \" + serialNumber + \" and it will cost \" + _____ + \".\")"
      ],
      blanks: [
        { label: "serialNumber conversion", options: ["str", "string", "text"], correct: "str" },
        { label: "amount conversion", options: ["int", "float", "str"], correct: "float" },
        { label: "amount in print", options: ["amount", "str(amount)", "float(amount)"], correct: "str(amount)" }
      ]
    },
    {
      id: "384102",
      title: "Reverse a product code",
      type: "single",
      prompt: ["Which variable declaration will reverse one of the product codes?"],
      choices: ["[::1]", "[1::]", "[::-1]", "[-1::]"],
      correct: "[::-1]"
    },
    {
      id: "384103",
      title: "Convert partial inventory to complete sets",
      type: "single",
      prompt: [
        "A warehouse manager has partial safety kits in inventory and needs the count shown as a whole number with complete sets on display.",
        "Convert inventoryCount to a value of 19."
      ],
      code: ["inventoryCount = 19.95"],
      choices: ["round", "floor", "ceil", "int"],
      correct: "int"
    },
    {
      id: "384104",
      title: "Build and sort a list",
      type: "sequence",
      prompt: ["Build a data structure with animals and sort it to produce this output:"],
      code: ["Bears", "Jaguars", "Lions", "Panthers"],
      items: [
        "animals.add(\"Jaguars\")",
        "print(animal)}",
        "for animal in animals:",
        "animals.sort()",
        "print(animal)",
        "animals.append(\"Jaguars\")",
        "animals = [\"Bears\", \"Panthers\", \"Lions\"]",
        "for animal in animals {"
      ],
      correct: [
        "animals = [\"Bears\", \"Panthers\", \"Lions\"]",
        "animals.append(\"Jaguars\")",
        "animals.sort()",
        "for animal in animals:",
        "print(animal)"
      ],
      slotLabel: "Step"
    },
    {
      id: "384105",
      title: "Find an item after sorting",
      type: "multi",
      prompt: ["Analyze the code example. Which two commands will display the rook?"],
      code: [
        "pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]",
        "pieces.sort()"
      ],
      choices: ["print(pieces[5])", "print(pieces[3])", "print(pieces[6])", "print(pieces[-1])"],
      correct: ["print(pieces[5])", "print(pieces[-1])"]
    },
    {
      id: "384106",
      title: "Last comparison before assignment",
      type: "single",
      prompt: ["Which comparison expression is evaluated last before the value is assigned to z?"],
      code: [
        "x = 5",
        "y = 3",
        "z = x + y > 7 and x * y < 15 or x - y > 2"
      ],
      choices: [
        "x + y > 7 and x * y < 15",
        "z =",
        "x - y > 2",
        "x * y < 15 or x - y > 2"
      ],
      correct: "x - y > 2"
    },
    {
      id: "384107",
      title: "Evaluate arithmetic assignments",
      type: "tf",
      prompt: ["Evaluate each variable assignment and indicate Yes if the expression is true or No if false."],
      code: [
        "a = 100 - 70 / 7",
        "b = (35 % 15) // 2",
        "c = -3 ** 2"
      ],
      rows: [
        { text: "a == 90", correct: "Yes" },
        { text: "b == 2.5", correct: "No" },
        { text: "c == -9", correct: "Yes" }
      ]
    },
    {
      id: "384108",
      title: "Grade message conditions",
      type: "blanks",
      prompt: ["Use dropdown arrows to complete code that matches grade ranges to messages."],
      facts: [
        "100: Outstanding",
        "90-99: Great",
        "71-89: You are doing well. Strive to improve.",
        "70 and under: Study hard"
      ],
      code: [
        "if grade _____ 100:",
        "    print(\"Outstanding\")",
        "elif grade _____ 90:",
        "    print(\"Great\")",
        "elif grade _____ 70:",
        "    print(\"Study hard\")",
        "else:",
        "    print(\"You are doing well. Strive to improve\")"
      ],
      blanks: [
        { label: "if grade __ 100", options: ["==", ">=", "<=", ">"], correct: "==" },
        { label: "elif grade __ 90", options: ["==", ">=", "<=", ">"], correct: ">=" },
        { label: "elif grade __ 70", options: ["==", ">=", "<=", "<"], correct: "<=" }
      ]
    },
    {
      id: "384109",
      title: "Match operators to results",
      type: "blanks",
      prompt: ["Match the correct operator to each result using a = 10 and b = 3."],
      code: ["a = 10", "b = 3"],
      blanks: [
        { label: "a ___ b = 13", options: ["+", "-", "*", "/", "//", "%"], correct: "+" },
        { label: "a ___ b = 7", options: ["+", "-", "*", "/", "//", "%"], correct: "-" },
        { label: "a ___ b = 3.33", options: ["+", "-", "*", "/", "//", "%"], correct: "/" },
        { label: "a ___ b = 3", options: ["+", "-", "*", "/", "//", "%"], correct: "//" },
        { label: "a ___ 3 = 1", options: ["+", "-", "*", "/", "//", "%"], correct: "%" }
      ]
    },
    {
      id: "384110",
      title: "Boolean statements with assignment",
      type: "tf",
      prompt: ["Using the following code values, select Yes if the Boolean statements are true and No if false."],
      code: [
        "a = 5",
        "b = 3",
        "c = b",
        "b = a"
      ],
      rows: [
        { text: "a == b", correct: "Yes" },
        { text: "a is b", correct: "Yes" },
        { text: "b == 3", correct: "No" },
        { text: "c is b", correct: "No" }
      ]
    },
    {
      id: "384111",
      title: "Membership keyword",
      type: "single",
      prompt: ["Select the keyword that checks whether the word \"nine\" is part of the quote."],
      code: [
        "quote = \"A stitch in time saves nine\"",
        "print(\"nine\" _____ quote)"
      ],
      choices: ["in", "is", "and", "with"],
      correct: "in"
    },
    {
      id: "384112",
      title: "Print two messages for high sales",
      type: "sequence",
      prompt: [
        "Place code lines in the correct order.",
        "The messages \"Great month\" and \"Keep it going\" are printed for month sales over 10000."
      ],
      items: [
        "else",
        "if month_sales > 10000:",
        "print(\"Great month\")",
        "print(\"Keep it going\")",
        "elif month_sales <= 10000",
        "if month_sales >= 10000"
      ],
      correct: [
        "if month_sales > 10000:",
        "print(\"Great month\")",
        "print(\"Keep it going\")"
      ],
      slotLabel: "Line"
    },
    {
      id: "384113",
      title: "Return letter grades",
      type: "blanks",
      prompt: [
        "Choose the correct lines of code for a function where 90+ gets A, 80-89 gets B, 70-79 gets C, and everyone else gets F."
      ],
      code: [
        "def grade(score):",
        "    if _____:",
        "        _____",
        "    elif _____:",
        "        _____",
        "    elif _____:",
        "        _____",
        "    else:",
        "        _____",
        "    return grade"
      ],
      blanks: [
        { label: "if condition", options: ["score > 90", "score >= 90", "score = 90", "score < 100"], correct: "score >= 90" },
        { label: "A assignment", options: ["grade = \"A\"", "return \"A\"", "score = \"A\""], correct: "grade = \"A\"" },
        { label: "B condition", options: ["score >= 80", "score > 80", "score <= 89"], correct: "score >= 80" },
        { label: "B assignment", options: ["grade = \"B\"", "return \"B\"", "score = \"B\""], correct: "grade = \"B\"" },
        { label: "C condition", options: ["score >= 70", "score > 70", "score <= 79"], correct: "score >= 70" },
        { label: "C assignment", options: ["grade = \"C\"", "return \"C\"", "score = \"C\""], correct: "grade = \"C\"" },
        { label: "else assignment", options: ["grade = \"F\"", "return \"F\"", "score = \"F\""], correct: "grade = \"F\"" }
      ]
    },
    {
      id: "384114",
      title: "Boolean execution order",
      type: "sequence",
      prompt: ["Drag and drop the code execution order for the print statement."],
      code: [
        "x = 7",
        "y = 4",
        "print(x > y and x - y >= 2 or x + y == 11 and not x * y > 25)"
      ],
      items: [
        "not x * y > 25",
        "x > y and x - y >= 2",
        "x + y == 11 and not x * y > 25",
        "x > y and x - y >= 2 or x + y == 11 and not x * y > 25"
      ],
      correct: [
        "not x * y > 25",
        "x > y and x - y >= 2",
        "x + y == 11 and not x * y > 25",
        "x > y and x - y >= 2 or x + y == 11 and not x * y > 25"
      ],
      slotLabel: "Order",
      note: "The order follows operator-precedence grouping: not, and groups, then the full or expression."
    },
    {
      id: "384115",
      title: "Stop a loop at End of Day",
      type: "blanks",
      prompt: [
        "Loop through values retrieved from a list. Keep printing values, but stop when the list sees \"End of Day\"."
      ],
      code: [
        "schedule = [\"Opening Comments\", \"Breakfast\", \"Breakout Session 1\", \"Lunch\", \"Breakout Session 2\", \"End of Day\", \"Opening Comments\", \"Breakfast\"]",
        "scheduledEvent = 0",
        "_____ (scheduledEvent < len(schedule)):",
        "    print(schedule[scheduledEvent])",
        "    if schedule[scheduledEvent] == \"End of Day\":",
        "        _____",
        "    else:",
        "        _____"
      ],
      blanks: [
        { label: "Loop keyword", options: ["while", "for", "if"], correct: "while" },
        { label: "Stop keyword", options: ["break", "continue", "pass"], correct: "break" },
        { label: "Move to next item", options: ["scheduledEvent += 1", "scheduledEvent = 0", "continue"], correct: "scheduledEvent += 1" }
      ]
    },
    {
      id: "384116",
      title: "For loop range",
      type: "single",
      prompt: ["Print the number of minutes to walk per day, starting with 10 minutes in week 1 and 50 minutes by week 5."],
      code: ["print(f\"{week * 10} minutes in {week}\")"],
      choices: [
        "for minutes in range(1,50)",
        "for week in range(6,1)",
        "for week in range(1,6)",
        "while week in range(6,1)",
        "while week in range(1,6)"
      ],
      correct: "for week in range(1,6)"
    },
    {
      id: "384117",
      title: "Placeholder keyword",
      type: "single",
      prompt: ["Which keyword added to the end of the code will serve as a placeholder for future text?"],
      code: ["for x in range(1,5):"],
      choices: ["while", "pass", "continue", "break"],
      correct: "pass"
    },
    {
      id: "384118",
      title: "Build calcSubtotal",
      type: "blanks",
      prompt: [
        "Complete a function named calcSubtotal. It takes an amount and a sales tax rate, calculates a subtotal, and returns it."
      ],
      code: [
        "_____ _____",
        "    subtotal = amount * (1 + salesTaxRate)",
        "    _____"
      ],
      blanks: [
        { label: "Function keyword", options: ["def", "function", "class"], correct: "def" },
        { label: "Function header", options: ["calcSubtotal(amount, salesTaxRate):", "calcSubtotal(amount):", "calc_subtotal = amount:"], correct: "calcSubtotal(amount, salesTaxRate):" },
        { label: "Return line", options: ["return subtotal", "print(subtotal)", "return amount"], correct: "return subtotal" }
      ]
    },
    {
      id: "384119",
      title: "Subtotal function result",
      type: "single",
      prompt: ["The code example is used to calculate a subtotal for an order. What is the amount of order1?"],
      code: [
        "def calcTotal(taxable, amount, salesTax, shipping):",
        "    if taxable == \"Yes\":",
        "        subtotal = amount + (1 * salesTax) + shipping",
        "    elif shipping == 0:",
        "        pass",
        "    else:",
        "        subtotal = amount + shipping",
        "    return subtotal",
        "order1 = calcTotal(\"No\", 500, .07, 0)",
        "print(\"Your order total is \", order1)"
      ],
      choices: ["An error is raised", "500.07", "500", "535"],
      correct: "An error is raised"
    },
    {
      id: "384120",
      title: "Call a function and store the result",
      type: "single",
      prompt: ["Which code example properly calls the function and returns a calculation stored in order_total?"],
      code: [
        "def subtotal(order_amt, sales_tax):",
        "    subtotal = float(order_amt) * (1 + float(sales_tax))",
        "    return subtotal"
      ],
      choices: [
        "order_total = call subtotal(500,.07)",
        "order_total(subtotal(500,.07))",
        "order_total = subtotal(500,.07)",
        "order_total = def subtotal(500,.07)"
      ],
      correct: "order_total = subtotal(500,.07)"
    },
    {
      id: "384121",
      title: "Comment character",
      type: "single",
      prompt: ["Which character should be placed before text in a line of code to make it a comment?"],
      choices: ["'", "/*", "#", "//"],
      correct: "#"
    },
    {
      id: "384123",
      title: "Continue a print statement on one line",
      type: "single",
      prompt: ["Select the symbol needed for the print statement to output the sales representative on a single line."],
      code: [
        "print(f\"Your sales representative is Nicole, you are in the East region, \" _____",
        "\"and you are based in the Potomac office.\")"
      ],
      choices: ["\\", "\\\\", "\\n", "\\t"],
      correct: "\\"
    },
    {
      id: "384124",
      title: "Read and print a file",
      type: "sequence",
      prompt: [
        "Open shirts.txt in a mode where it cannot be written to, read the contents of the entire file, and print the contents."
      ],
      items: [
        "print(shirtFileContents)",
        "shirtFileContents = shirtFile.read()",
        "for shirtLines = range(shirtFile):",
        "shirtFile = open(\"shirts.txt\", \"a\")",
        "shirtFile = open(\"shirts.txt\", \"r\")"
      ],
      correct: [
        "shirtFile = open(\"shirts.txt\", \"r\")",
        "shirtFileContents = shirtFile.read()",
        "print(shirtFileContents)"
      ],
      slotLabel: "Line"
    },
    {
      id: "384125",
      title: "Complete a unit test",
      type: "blanks",
      prompt: ["Select the code needed to finish a unit test."],
      code: [
        "import unittest",
        "a = 3",
        "b = 6",
        "class Test_Example_UnitTest(unittest._____):",
        "    def test_equal(self):",
        "        self._____(2 + 8, a + b)",
        "if _____ == '__main__':",
        "    unittest.main()"
      ],
      blanks: [
        { label: "Class base", options: ["TestCase", "UnitTest", "main"], correct: "TestCase" },
        { label: "Assert method", options: ["assertEqual", "assertTrue", "assertIs"], correct: "assertEqual" },
        { label: "Main-module variable", options: ["__name__", "__main__", "name"], correct: "__name__" }
      ]
    },
    {
      id: "384126",
      title: "Check if a file exists",
      type: "blanks",
      prompt: ["Read and print the text file if it already exists. If it does not exist, print a message indicating so."],
      code: [
        "import os.path",
        "if os.path._____('work.txt') == True:",
        "    workFile = open('work.txt', 'r')",
        "    workFileFirstLine = _____",
        "else:",
        "    print(\"The work file is not in this folder.\")"
      ],
      blanks: [
        { label: "File exists check", options: ["exists", "isfile", "open"], correct: "exists" },
        { label: "Read/print file", options: ["print(workFile.read())", "workFile.read()", "open(workFile)"], correct: "print(workFile.read())" }
      ],
      note: "If your original runner shows a separate print line after this assignment, the core read expression is workFile.read()."
    },
    {
      id: "384127",
      title: "Validate location input",
      type: "sequence",
      prompt: [
        "Place the code lines in the correct order.",
        "Location should be the first variable declared, and the user should try again if the entry is not one of the options."
      ],
      items: [
        "while response not in location:",
        "response = input(\"Enter North, South, West, or East for a location.\")",
        "print(response)",
        "location = [\"North\", \"South\", \"West\", \"East\"]",
        "print(\"Try again.\")"
      ],
      correct: [
        "location = [\"North\", \"South\", \"West\", \"East\"]",
        "response = input(\"Enter North, South, West, or East for a location.\")",
        "while response not in location:",
        "print(\"Try again.\")",
        "response = input(\"Enter North, South, West, or East for a location.\")",
        "print(response)"
      ],
      slotLabel: "Line"
    },
    {
      id: "384128",
      title: "Create an f-string",
      type: "single",
      prompt: ["Add the symbol needed to print the number of items instead of {items}."],
      code: [
        "price = 9.95",
        "items = 15",
        "print(_____ \"We have {items} items in stock.\")"
      ],
      choices: ["f", "\\", "format", "%"],
      correct: "f"
    },
    {
      id: "384129",
      title: "Statements about writing files",
      type: "multi",
      prompt: ["Which statements about the code are true? Choose two."],
      code: [
        "with open('log.txt', 'w') as file:",
        "    file.write('Daily Log')",
        "    file.close()"
      ],
      choices: [
        "The close function is not needed.",
        "A file.open() statement needs to be added at the beginning of the with statement.",
        "The log file is overwritten each time it is opened.",
        "The text in the write function adds itself to the end of the log file."
      ],
      correct: [
        "The close function is not needed.",
        "The log file is overwritten each time it is opened."
      ]
    },
    {
      id: "384130",
      title: "sys.argv[0]",
      type: "single",
      prompt: ["When using sys.argv[0] in a command prompt as part of running a Python app, what does the 0 represent?"],
      choices: [
        "The first function in the file.",
        "The file name.",
        "The main class in the file.",
        "The first argument in a function."
      ],
      correct: "The file name."
    },
    {
      id: "384131",
      title: "Adjust a loan calculation",
      type: "single",
      prompt: ["Choose the line of code that calculates the loan total based on the interest rate being applied to the car loan and the license fee."],
      code: [
        "carLoan = 20000",
        "intRate = 1.05",
        "licenseFee = 500",
        "totalLoan = carLoan + licenseFee * intRate"
      ],
      choices: [
        "totalLoan = carLoan + (licenseFee * intRate)",
        "totalLoan = carloan - licenseFee * intRate",
        "totalLoan = carLoan + licenseFee / intRate",
        "totalLoan = (carLoan + licenseFee) * intRate"
      ],
      correct: "totalLoan = (carLoan + licenseFee) * intRate"
    },
    {
      id: "384132",
      title: "Test same memory space",
      type: "single",
      prompt: ["Which statement will test to see if a and b share the same memory space?"],
      code: [
        "def test_memory(self):",
        "    a = 3",
        "    b = a",
        "    #insert assert test here"
      ],
      choices: ["self.assertTrue(a,b)", "self.assertEqual(a,b)", "self.assertIn(a,b)", "self.assertIs(a,b)"],
      correct: "self.assertIs(a,b)"
    },
    {
      id: "384133",
      title: "Try, except, else, finally",
      type: "blanks",
      prompt: ["Fill in the missing keywords to handle errors gracefully and ensure the last print statement always prints."],
      code: [
        "____",
        "    x = float(input(\"Enter a number. \"))",
        "    y = float(input(\"Enter a number to divide by. \"))",
        "    print(f\"The answer is {x/y}.\")",
        "____",
        "    print(\"Uh oh. Did you enter something besides a number? Did you try to divide by zero?\")",
        "____",
        "    print(\"You successfully played the division game.\")",
        "____",
        "    print(\"Thank you for playing.\")"
      ],
      blanks: [
        { label: "Block 1", options: ["try:", "else:", "except:", "finally:"], correct: "try:" },
        { label: "Block 2", options: ["try:", "else:", "except:", "finally:"], correct: "except:" },
        { label: "Block 3", options: ["try:", "else:", "except:", "finally:"], correct: "else:" },
        { label: "Block 4", options: ["try:", "else:", "except:", "finally:"], correct: "finally:" }
      ]
    },
    {
      id: "384135",
      title: "Raise an exception and always run code",
      type: "blanks",
      prompt: [
        "Select the missing code to throw an exception that the calling code can catch, and the keyword that shows a block no matter the outcome."
      ],
      code: [
        "if y == 0:",
        "    _____ Exception(\"You cannot divide by zero\")",
        "_____",
        "print(\"Thank you for playing.\")"
      ],
      blanks: [
        { label: "Throw exception", options: ["throw", "raise", "raise()", "throw()"], correct: "raise" },
        { label: "Always-run block", options: ["else:", "except:", "finally:", "try:"], correct: "finally:" }
      ]
    },
    {
      id: "384136",
      title: "Use math methods for inventory",
      type: "blanks",
      prompt: [
        "Complete the code snippet to calculate the nearest whole number up, nearest whole number down, and integer of the whole number."
      ],
      code: ["average_inventory = 77.4"],
      blanks: [
        { label: "Import module", options: ["import math", "use math", "sys.math"], correct: "import math" },
        { label: "upper_bound", options: ["math.ceil", "math.floor", "int"], correct: "math.ceil" },
        { label: "lower_bound", options: ["math.ceil", "math.floor", "int"], correct: "math.floor" },
        { label: "bound", options: ["math.ceil", "math.floor", "int"], correct: "int" }
      ]
    },
    {
      id: "384137",
      title: "Random methods",
      type: "blanks",
      prompt: [
        "Complete the code to generate the proper random values: one random country, the list in random order, and two random countries."
      ],
      code: [
        "import random",
        "countries = ['USA','Canada','Mexico','Japan','Spain','Kenya']",
        "result1 = random._____",
        "result2 = random._____",
        "result3 = random._____"
      ],
      blanks: [
        { label: "result1", options: ["choice(countries)", "shuffle(countries)", "sample(countries,2)"], correct: "choice(countries)" },
        { label: "result2", options: ["choice(countries)", "shuffle(countries)", "sample(countries,2)"], correct: "shuffle(countries)" },
        { label: "result3", options: ["choice(countries)", "shuffle(countries)", "sample(countries,2)"], correct: "sample(countries,2)" }
      ]
    },
    {
      id: "384138",
      title: "Match methods with modules",
      type: "matching",
      prompt: ["Match each method with its built-in module."],
      options: ["math", "sys", "os", "io"],
      matches: [
        { term: "open()", correct: "io" },
        { term: "ceil()", correct: "math" },
        { term: "mkdir()", correct: "os" },
        { term: "exit()", correct: "sys" }
      ]
    },
    {
      id: "384139",
      title: "Area of a circle",
      type: "sequence",
      prompt: [
        "Build code in order to store pi, enter a radius with decimal places, calculate area, and print the result formatted to two decimal places."
      ],
      items: [
        "use math",
        "radius = int(input(\"Enter a radius for a circle.\"))",
        "radius = float(input(\"Enter a radius for a circle.\"))",
        "print(f\"A circle with a radius of {radius} will have an area of %.2d.\" %area)",
        "area = pi * radius ^ 2",
        "pi = math.pi",
        "print(f\"A circle with a radius of {radius} will have an area of %.2f.\" %area)",
        "import math",
        "area = pi * radius ** 2"
      ],
      correct: [
        "import math",
        "pi = math.pi",
        "radius = float(input(\"Enter a radius for a circle.\"))",
        "area = pi * radius ** 2",
        "print(f\"A circle with a radius of {radius} will have an area of %.2f.\" %area)"
      ],
      slotLabel: "Line"
    },
    {
      id: "384140",
      title: "Current date and time",
      type: "multi",
      prompt: ["Which two code snippets replace the #current date and time comment with the correct date and time?"],
      code: [
        "import datetime",
        "log_time = #current date and time",
        "print(\"entry time: \", log_time)"
      ],
      choices: [
        "datetime.datetime.today()",
        "datetime.datetime.strptime()",
        "datetime.datetime.now()",
        "datetime.datetime.strftime()"
      ],
      correct: ["datetime.datetime.today()", "datetime.datetime.now()"]
    },
    {
      id: "446172",
      title: "Loop and break count",
      type: "input",
      prompt: ["Evaluate the partial code snippet. Numerically, how many cities from the list will print?"],
      code: [
        "cities = ['Anchorage','Juneau','Fairbanks','Ketchikan','Sitka','Wasilla']",
        "for city in cities:",
        "    print(f'{city} is a famous Alaskan city.')",
        "    if city == 'Ketchikan':",
        "        break"
      ],
      inputType: "number",
      correct: "4"
    },
    {
      id: "446233",
      title: "Compound assignment statements",
      type: "tf",
      prompt: ["For each statement regarding the values of these variables, indicate Yes if true and No if false."],
      code: [
        "a = 5",
        "b = 2",
        "c = 3",
        "a**= b",
        "b*= c",
        "a//=b"
      ],
      rows: [
        { text: "c == 3", correct: "Yes" },
        { text: "b == 6", correct: "Yes" },
        { text: "a == 1", correct: "No" }
      ]
    },
    {
      id: "446235",
      title: "Boolean and arithmetic calculations",
      type: "tf",
      prompt: ["Using these variables, indicate Yes if the calculation is true and No if false."],
      code: [
        "a = 10",
        "b = 7",
        "c = 5"
      ],
      rows: [
        { text: "a > b and b > c", correct: "Yes" },
        { text: "a >= c and not (b + c > a)", correct: "No" },
        { text: "a + b * c == 85 or a - b * c == 15", correct: "No" }
      ]
    }
  ];

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
