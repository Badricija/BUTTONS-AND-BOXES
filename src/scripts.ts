import $ from 'jquery';
import sum from './utils/sum/sum';

document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.getElementById('button1');
    const box1 = document.querySelector('.box1');
  
    if (button1 && box1) {
      button1.addEventListener('click', () => {
        (box1 as HTMLElement).style.backgroundColor = 'yellow';
      });
    }
});
  
document.addEventListener('DOMContentLoaded', () => {
    const button2 = document.getElementById('button2');
    const box2 = document.querySelector('.box2');
    if (button2 && box2) {
      button2.addEventListener('click', () => {
        box2.textContent = 'SUCCESS';
      });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const button3 = document.getElementById('button3');
    const box3 = document.querySelector('.box3');
    button3.addEventListener('click', () => {
      (box3 as HTMLElement).style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const button4 = document.getElementById('button4');
    const box4 = document.querySelector('.box4');
    if (button4 && box4) {
        if (button4 && box4) {
            button4.addEventListener('click', () => {
              if ((box4 as HTMLElement).style.display === 'none') {
                (box4 as HTMLElement).style.display = ''; 
              } else {
                (box4 as HTMLElement).style.display = 'none';
              }
            });
        }
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const button5 = document.getElementById('button5');
    const box5 = document.querySelector('.box5');
    const colors = [
      '#017187',
      'rgba(92, 1, 135, 0.71)',
      'rgba(135, 17, 1, 0.56)',
      'rgba(1, 135, 14, 0.63)',
      '#E2CF22'
    ];
    let clickCount = 0; // Keeps track of the number of clicks.
    if (button5 && box5) {
      button5.addEventListener('click', () => {
        (box5 as HTMLElement).style.backgroundColor = colors[clickCount % colors.length];
        clickCount++; // Increment the counter after each click.
      });
    }
  });
document.addEventListener('DOMContentLoaded', () => {
    const button6 = document.getElementById('button6');
    const box6 = document.querySelector('.box6');
    button6.addEventListener('click', () => {
      let count = 0; // Initialize counter
      (button6 as HTMLButtonElement).disabled = true;
      const interval = setInterval(() => {
        count++;
        (box6 as HTMLElement).textContent = count.toString();
        if (count >= 10) {
          clearInterval(interval); 
          (button6 as HTMLButtonElement).disabled = false;
        }
      }, 3000); // Set the interval to 3 seconds (3000 milliseconds)
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const button7 = document.getElementById('button7');
    const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4, .box5, .box6');
    const body = document.body;
    button7.addEventListener('click', () => {
      boxes.forEach((box) => {
        (box as HTMLElement).style.backgroundColor = '#18D5E1';
      });
      body.style.backgroundColor = '#000000';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const box1 = document.querySelector('.box1');
    box1.addEventListener('mouseenter', () => {
      (box1 as HTMLElement).style.backgroundColor = 'red';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const box5 = document.querySelector('.box5');
    let count = 0;
    let interval: string | number | NodeJS.Timer;
  
    if (box5) {
      box5.addEventListener('mouseenter', () => {
        count = 0; // Reset count to 0
        (box5 as HTMLElement).textContent = count.toString(); // Update the textContent with 0
        interval = setInterval(() => {
          count++;
          (box5 as HTMLElement).textContent = count.toString(); // Update the textContent with count
          if (count >= 10) {
            clearInterval(interval); // Stop the interval when count reaches 10
          }
        }, 1000); // Update the count every second
      });
      box5.addEventListener('mouseleave', () => {
        clearInterval(interval); // Clear interval when mouse leaves the box
        count = 0; // Reset count to 0
        (box5 as HTMLElement).textContent = count.toString(); // Update the textContent with 0
      });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.placeholder input') as HTMLInputElement;
    const div15 = document.querySelector('.div15');
  
    input.addEventListener('input', () => {
      if (div15) {
        (div15 as HTMLElement).textContent = input.value;
      }
    });
});
  
  

  
  
  