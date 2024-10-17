  
<pre> 

arr.filter((item)=>item.length>0)
 .map((item)=>console.log(item))   //  this is  Power condtion for  check data   🎉🎉🎉

 
noTifaction: { 
  type: [Object], 
  default: () => []
}

 const A = {name:"Ghaith"};
console.log(Object.keys(A).length); 

 
import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Data Page] Load Data');
export const loadDataSuccess = createAction(
  '[Data API] Load Data Success',
  props<{ data: any[] }>()
);
export const loadDataFailure = createAction(
  '[Data API] Load Data Failure',
  props<{ error: any }>()
);





   int fun()
{
    static int count = 0;
    count++;
    return count;
}

int main()
{
    printf("%d ", fun());
    printf("%d ", fun());
    return 0;
}




   const arr = [{ post: "user1" }, { post: "user2" }, { post: "user3" }];

// Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  // Random index
    [array[i], array[j]] = [array[j], array[i]];    // Swap elements
  }
  return array;
}

const shuffledArr = shuffle([...arr]);  // Shuffle a copy of the original array
console.log(shuffledArr);  // Random order, no duplicates




    // i love this way to update 

     
        let UpdateChat  = await ChatTalking.findoneandUpdate({

            $and: [
                { users: { $elemMatch: { $eq: req.params.id } } }, 
                { users: { $elemMatch: { $eq: userId } } }  
            ]


        },

        {$set : {BLOCK:true}},
        {new : true}
    
    );
    
   
</pre>
