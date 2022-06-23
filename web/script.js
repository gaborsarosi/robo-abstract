
//Function giving a random integer 0,1,...,max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


//Position of real and fake abstracts. 1=left, 2=right
let realnum = 2;
let fakenum = 1;

//Loads a random entry from data.json. Selects a random position for the real abstract.
function setTitle() {
    realnum = getRandomInt(2)+1;
    fakenum = (realnum )%2 +1;
    m = getRandomInt(data.length);
    document.getElementById("articletitle").textContent = 'Title: '+data[m]['title'];
    document.getElementById("button"+realnum).textContent = data[m]['real_abstract'];
    document.getElementById("button"+fakenum).textContent = data[m]['fake_abstract'];
}

//Your total tries and correct guesses
let tries = 0;
let correct = 0;

//Called when an abstract is selected. Argument n=1: left, n=2: right is selected. Determines if the selection was correct.
function buttonClicked(n) {
    if (n == realnum) {
        tries+= 1;
        correct+= 1;
    } else {
        tries+= 1;
    }
    document.getElementById("result").textContent = correct + ' correct out of ' + tries + ' guesses (' + 100*correct/tries + '% percent)';
    setTitle();
}
