/* console.time('a');
var items1=['DAVIS','ARPAN','SHRYANASH','REEETA'];
var items2=Array('DAVIS','ARPAN','SHRYANASH','REEETA');
console.table(items1);
console.timeEnd('a'); */
/*
const courses=['JavaScript','Node Js','React Js'];
const num=[1,2,3,4,5,6,7];
const [x,...y]=num;
console.log(x);
console.log(y);
console.log(courses);
console.log(courses[2]);
*/

/*
const subject=Array('JavaScript','Node Js','React Js');
console.log(subject);
console.log(subject.length);
subject[3]='Angular Js';
console.log(subject);
*/
/* 
 var array_1=[1,2,3,4,5]
array_1.forEach(function(num,i){
    array_1[i] **=array_1[i];
})
console.log(array_1); 
for(i=0;i<5;i++)
{
    array_1[i] =array_1[i]*array_1[i];
}
console.log(array_1); */
/* var items=['david','john','michael','reeta'];
console.log(items.pop());
console.log(items.pop());
console.log(items); */
package java_programs;

public class Sequence {
public static int countSequence(int[] arr)
{
int count=0;
for(int start=0;start<arr.length-1;start++)
{
if(arr[start]==0)
continue;
for(int next=start+1;next<arr.length;next++)
{
if(arr[next]%arr[start]==0)
{
int m=arr[next]/arr[start];
boolean isValid=true;
int current=m;
for(int j=next+1;j<arr.length;j++)
{
if(arr[j]%arr[start]==0&& arr[j]/arr[start]==current+1)
{
current++;
}
else if(arr[j]%arr[start]==0){
isValid=false;
break;

}
}
if(isValid && current>=2)
{
count++;
break;
}
}
}
}
return count;
}
public static void main(String[] args) {
int[] arr= {9,7,3,6,9};
System.out.println(countSequence(arr));
}

}