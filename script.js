 const resultInput = document.querySelector('.result');
        let currentInput = '';
      
        // Add event listeners to all buttons
        document.querySelectorAll('button').forEach(button => {
          button.addEventListener('click', function () {
            const value = this.innerText;
      
            if (value === 'C') {
              // Clear the input
              currentInput = '';
              resultInput.value = '';
            }
            else if (value === 'Back') {
        // Remove the last character
        currentInput = currentInput.slice(0, -1);
        resultInput.value = currentInput;
            }
         else if (value === '=') {
              try {
                // Evaluate the expression and show the result
                currentInput = eval(currentInput);
                resultInput.value = currentInput;
              } catch {
                resultInput.value = 'Not Valid';
                currentInput = '';
              }
            } else {
              // Append the button value to the current input
              currentInput += value;
              resultInput.value = currentInput;
            }
          });
        });