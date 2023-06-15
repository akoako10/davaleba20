// var str = "Lorem ipsum dolor. sit amet? consectetur, adipisicing elit. Id."

// var a = str.replaceAll("?","").replaceAll(",","").replaceAll(".","")
//  console.log(a)
 
 


// d = a.split(" ")
// // console.log(d)


function WordCount(str) {

    var a = str.replaceAll("?","").replaceAll(",","").replaceAll(".","")
    const words = a.split(" ")
    const everyword = {}

    for(var i = 0;i<words.length;i++) {
        const word = words[i];
        if(everyword[word]) {
            everyword[word]++

        }else {
            everyword[word]=1
        }

    }
    return everyword

}

var str = "ravaxar, chemi dzma? xo xar magrad? xo xo xo"
var nice = WordCount(str)

console.log(nice)