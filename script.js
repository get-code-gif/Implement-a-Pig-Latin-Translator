function translatePigLatin(str){
const regix = /[aeiou]/;
let vowel,firstIndex,second,before;
 if(regix.test(str) === false){
     return  str + "ay";
  }
for(let i=0; i<str.length; i++){
 
if(regix.test(str[i])){
 //first = str[str.search(str[i])];
 //firstIndex = str.indexOf(first);
 vowel = str.search(regix);
 }
 if(!regix.test(str[i])){
  //consnat += str[i];
  if(vowel !== -1){
     before = str.slice(0, vowel);
  }
 
 }
 firstIndex = str.slice(vowel);

if(vowel >= 1){
second = before + "ay";
}
if(vowel === 0){
 second = before + "way"; 
}
}
return firstIndex + second;
}

console.log(translatePigLatin("algorithm"))
