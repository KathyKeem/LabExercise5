//Task 3-1
let textVar = prompt("Enter your address:");
let textVar2 = prompt("Enter your course:");
console.log(textVar);
console.log(textVar2);

//Task 3-2
let inputVar = prompt("Count the number (words, char, and sentence) \nMake a sentence:");
let inputLength = inputVar.length;
let inputSentence = inputVar.split(/[.?!]/g).filter(Boolean).length;
let inputWords = inputVar.split(' ').length;

console.log("Sentence: " + inputVar);
console.log("Number of characters: " + inputLength);
console.log("Number of sentence/s: " + inputSentence);
console.log("Number of words: " + inputWords);

//Task 3-3
let text = prompt("Identify the most frequent word: \nMake a sentence:");
let words = text.trim().split(/\s+/);
let wordFrequency = {};
  
words.forEach(function(word) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

let mostFrequentWord = "";
let maxFrequency = 0;
for (var word in wordFrequency) {
    if (wordFrequency.hasOwnProperty(word)) {
        if (wordFrequency[word] > maxFrequency) {
            mostFrequentWord = word;
            maxFrequency = wordFrequency[word];
        }
    }
}

console.log("Sentence: "+ text);
console.log("Most frequent word: " + mostFrequentWord);
console.log("Count: " + maxFrequency);

//Task 3-4
let inputAvg = prompt('Average word length \nMake a sentence:');
let inputLength2 = inputAvg.length;
let inputWords2 = inputAvg.split(' ').length;
let average = inputLength2 / inputWords2;

console.log("Sentence: " + inputAvg);
console.log("Average Word Length: "+ average);

