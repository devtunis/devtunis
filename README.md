          
  <pre>  
 
 # love this idea so much
          
              global ptr
    lastPtr = ptr  # Start from the head pointer
    prevPtr = None  # Keep track of the last valid node

    while lastPtr is not None:
        prevPtr = lastPtr  # Store the last valid node before updating lastPtr
        lastPtr = ram[lastPtr]['ref']  # Move to the next node
    
    print(prevPtr)
          arr = [5,4,3,2,1]

sawpped= True

def perumter(arr,x,y):
    arr[x],arr[y] = arr[y],arr[x]
    
def sorting__alogrithme(arr):
    global sawpped
    if len(arr)==1:return arr

    if sawpped == False:return arr 
    
    
    else:
        sawpped = False
        i  = 0
        while i  < len(arr)-1:
            if arr[i]>arr[i+1]:
                perumter(arr,i,i+1)
                sawpped = True
            i+=1
         
        if sawpped :sorting__alogrithme(arr)
        
print(arr)         
sorting__alogrithme(arr)
print(arr)





                
     position: relative;
    overflow: hidden;   

    //------------------
import time
n = 10
i = 0

while True:

    if i<n:
        i=i+1
    else:
        i=n
        while i>0:
            print(i)
            i=i-1
        i = 0
    
    //------------------------------

    useEffect(() => {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      
    }, i * 100); // Delay the life with each iteration
  }
}, []);


    
npm install react-router-dom@6.26.2

   #Me {
    position: sticky;
    top: 0;
    width: 300px;
    resize: both;
    overflow: auto;
    padding: 30px 10px;
    transition: background-image 1s ease-in-out, opacity 1s ease-in-out;
    opacity: 1;
    border-inline-start: 10px solid red;
   } 
 <hr/>

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 console.log(hours,minutes)
 
}, 1000);



    
 </pre>

<img src="wallper.jpg"><img/>
