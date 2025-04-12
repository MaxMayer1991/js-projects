function show() {
    let name = document.getElementById('name').value;
    let val1 = document.getElementById('val1').value;
    let val2 = document.getElementById('val2').value;
    val1 = parseInt(val1)
    val2 = parseInt(val2)
    let val3 = val1 + val2
    document.getElementById('result').innerHTML = name.toUpperCase() + "!" + "\n" + "Suma podanych przez Ciebie liczb wynosi: " + val3;
}
function draw() {
    let elem = document.getElementById('triangle')
    elem.innerHTML = '';
    let char = document.getElementById('ASCII_Char').value;
    let height = document.getElementById('height').value;
    let tri = '';
    alert(char)
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            tri += char + ' ';
        }
        tri+= '<br>';
    }
    let square
    square = height ** 2 / 2
    tri += 'Square of triangle: ' + square
    document.getElementById('triangle').innerHTML = tri
}
function transform() {
    let text = document.getElementById('sentence').value
    let words;
    words = text.split(" ")

    for (let limit = words.length - 1; limit > 0; limit--) {
        for (let i = 0; i < limit; i++){
            if(words[i] > words[i+1]){
                const temporary = words[i];
                words[i] = words[i+1];
                words[i+1] = temporary;
            }
        }
    }
    let maxLen = words[0].length;
    for (let j = 0; j < words.length - 1; j++){
            if(words[j].length > words[j+1].length){
                maxLen = words[j]
        }
    }
    let str = "";
    if (maxLen.includes("A") || maxLen.includes("a")){
        str += "True"
    }
    else {
        str += "False"
    }
    alert("Longest word: " + maxLen + "\nNumber of letters: " + maxLen.length + "\nIs the letter \"A\" present: " + str)


}