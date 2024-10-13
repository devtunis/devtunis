 
<pre>
noTifaction: { 
  type: [Object], 
  default: () => []
}

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



 
</pre>
