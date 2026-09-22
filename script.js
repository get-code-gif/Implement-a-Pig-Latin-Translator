function translatePigLatin(str){
const regix = /[aeiou]/;
let vowel,firstIndex,second,before;
 if(regix.test(str) === false){
     return  str + "ay";
  }
for(let i=0; i<str.length; i++){
 
if(regix.test(str[i])){
 console.log(vowel)
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



function translatePigLatin(str) {
  const regex = /[aeiou]/;

  // No vowels
  if (!regex.test(str)) {
    return str + "ay";
  }

  // Find the first vowel
  const vowel = str.search(regex);

  // Vowel is at the beginning
  if (vowel === 0) {
    return str + "way";
  }

  // Separate consonants from the rest of the word
  const before = str.slice(0, vowel);
  const firstIndex = str.slice(vowel);

  return firstIndex + before + "ay";
}

console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("glove"));     // oveglay
console.log(translatePigLatin("rhythm"));    // rhythmay
console.log(translatePigLatin("schwartz"));  // artzschway
