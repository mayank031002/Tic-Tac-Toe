#include<stdio.h>
int main(){
    int X;
    float T,Y;
    
    scanf("%f",&T);
    scanf("%d",&X);
    if((X>0 && X<=2000)&&(0<=Y && Y<=2000)){
        
     if(T>X,X%5==0){
       Y=T-X-0.5; 
        printf("%.2f",Y);
    }
    else if(T<X){
        printf("%.2f",T);
        }
    
    }
    
    return 0;
}