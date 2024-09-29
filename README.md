# JS-code-challenge-1
The folder the  following three files:
        #speed.js
        #index.js
        #script.js
This project was built by:
.vscode

INSTALLATION
For user installation,clone the repo with:
        git clone git@github.com:alexnasir/JS-code-challenge-1.git

USAGE
The following piece of code prompts the user to input the students mark and which should be between 0 to 100:


                    function input() {
                    let mark = prompt("Student mark (0-100):");
                    mark = parseFloat(mark);
                    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
                        let grade = grades(mark);
                        alert(`Grade: ${grade}`);
                    } else {
                        alert("NOT VALID!!!");
                    }
                    }

                        console.log(input);

Which is graded by the following code : 

        function grades(mark) {
        if (mark > 79) {
            return "A";
        } else if (mark >= 60) {
            return "B";
        } else if (mark >= 49) {
            return "C";
        } else if (mark >= 40) {
            return "D";
        } else {
            return "E";
        };
        }

LICENCE 
Distributed under the MIT License. See LICENSE.txt for more information.

CONTACT
Name - alexnasiali45@gmail.com
project Link: git@github.com:alexnasir/JS-code-challenge-1.git

