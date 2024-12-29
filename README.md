 
#include <stdio.h>

int global_variable = 10;

void change_global(int *ptr) {
    *ptr = 20; 
}

int main() {
    printf("Before: %d\n", global_variable);
    change_global(&global_variable); 
    printf("After: %d\n", global_variable);
    
    return 0;
}
