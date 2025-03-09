     
<pre>  
 this solution for this data when the script does not wokring  Set-ExecutionPolicy RemoteSigned
  
    
const items = document.querySelectorAll(".card");

items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        item.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(1.1)', opacity: 0.8 }
        ], {
            duration: 300,
            fill: 'forwards'
        });
    });
}); 
</pre>
               
<img src="wallper.jpg"><img/>
