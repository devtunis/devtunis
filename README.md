 
<pre>
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


   
</pre>
