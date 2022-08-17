// // var input = "hello i am here";
// // var letter = input.split('');

// // for (var i = 0; i < letter.length; i++) {
// //     letter[i] = '<span>' + letter[i] + '</span>'
// //     document.getElementById("textbox").innerHTML += letter
// // }

// //for each letter in the website
//     //if letter = "A" or "a", then letter.style = red
//     //


// /*
// Instructions:
// Make a button, input box, and text display box
// When clicked, the button will run the function colorText
// colorText will grab the value from the input box and set to variable inputString
//     replace each letter with a span including letter and color style
//     set innerHTML of text display box to the new colored text
// Grab the text from the input box
// */

// function colorText(){
//     myStr = myStr.replace(/a/g, `<span style="color:#C22123;">a</span>`);
//     myStr = myStr.replace(/b/g, `<span style="color:#251B64;">b</span>`);
//     // myStr = myStr.replace(/c/g, `<span style="color:#DDB04E;">c</span>`);
//     // myStr = myStr.replace(/d/g, '<span style="color:#64504B;">k</span>');
//     // myStr = myStr.replace(/e/g, '<span style="color:#EBFA55;">e</span>');
//     // myStr = myStr.replace(/f/g, '<span style="color:#A888BC;">f</span>');
//     // myStr = myStr.replace(/g/g, '<span style="color:#34923F;">g</span>');
//     // myStr = myStr.replace(/h/g, '<span style="color:#DE6020;">h</span>');
//     // myStr = myStr.replace(/i/g, '<span style="color:#170C10;">i</span>');
//     // myStr = myStr.replace(/j/g, '<span style="color:#2C0984;">j</span>');
//     // myStr = myStr.replace(/k/g, '<span style="color:#E73066;">k</span>');
//     // myStr = myStr.replace(/l/g, '<span style="color:#EDE17F;">l</span>');
//     // myStr = myStr.replace(/m/g, '<span style="color:#0041B2;">m</span>');
//     // myStr = myStr.replace(/n/g, '<span style="color:#D476D7;">n</span>');
//     // myStr = myStr.replace(/o/g, '<span style="color:#FDFFE2;">o</span>');
//     // myStr = myStr.replace(/p/g, '<span style="color:#F2ACC7;">p</span>');
//     // myStr = myStr.replace(/q/g, '<span style="color:#7C5E84;">q</span>');
//     // myStr = myStr.replace(/r/g, '<span style="color:#5E2522;">r</span>');
//     // myStr = myStr.replace(/s/g, '<span style="color:#F0EEEF;">s</span>');
//     // myStr = myStr.replace(/t/g, '<span style="color:#FEFAC0;">t</span>');
//     // myStr = myStr.replace(/u/g, '<span style="color:#260456;">u</span>');
//     // myStr = myStr.replace(/v/g, '<span style="color:#3D043D;">v</span>');
//     // myStr = myStr.replace(/w/g, '<span style="color:#988060;">w</span>');
//     // myStr = myStr.replace(/x/g, '<span style="color:#140F0C;">x</span>');
//     // myStr = myStr.replace(/y/g, '<span style="color:#EAE889;">y</span>');
//     // myStr = myStr.replace(/z/g, '<span style="color:#202021;">z</span>');

//     // Insert modified string in paragraph

// }

var newStr = ""
var itemInStr
function buttonClick() {
    // for (const s of str) {
    //     console.log(s)
    //     console.log(str)
    //     // newStr += s
    // }
    const str = document.getElementById("inputbox").value;

    // newStr = str
    for (const s of str) {
        switch (s) {
            case "a":
                itemInStr = s
                itemInStr = itemInStr.replace(/a/g, `<span style="color:#C22123;">a</span>`)
                newStr += itemInStr
                break;

            case "b":
                itemInStr = s
                itemInStr = itemInStr.replace(/b/g, `<span style="color:#251B64;">b</span>`)
                newStr += itemInStr
                break;

            case "c":
                itemInStr = s
                itemInStr = itemInStr.replace(/c/g, `<span style="color:#DDB04E;">c</span>`)
                newStr += itemInStr
                break;

            case "d":
                itemInStr = s
                itemInStr = itemInStr.replace(/d/g, `<span style="color:#64504B;">d</span>`)
                newStr += itemInStr
                break;

            case "e":
                itemInStr = s
                itemInStr = itemInStr.replace(/e/g, `<span style="color:#EBFA55;">e</span>`)
                newStr += itemInStr
                break;

            case "f":
                itemInStr = s
                itemInStr = itemInStr.replace(/f/g, `<span style="color:#A888BC;">f</span>`)
                newStr += itemInStr
                break;

            case "g":
                itemInStr = s
                itemInStr = itemInStr.replace(/g/g, `<span style="color:#34923F;">g</span>`)
                newStr += itemInStr
                break;

            case "h":
                itemInStr = s
                itemInStr = itemInStr.replace(/h/g, `<span style="color:#DE6020;">h</span>`)
                newStr += itemInStr
                break;

            case "i":
                itemInStr = s
                itemInStr = itemInStr.replace(/i/g, `<span style="color:#170C10;">i</span>`)
                newStr += itemInStr
                break;

            case "j":
                itemInStr = s
                itemInStr = itemInStr.replace(/j/g, `<span style="color:#2C0984;">j</span>`)
                newStr += itemInStr
                break;

            case "k":
                itemInStr = s
                itemInStr = itemInStr.replace(/k/g, `<span style="color:#E73066;">k</span>`)
                newStr += itemInStr
                break;

            case "l":
                itemInStr = s
                itemInStr = itemInStr.replace(/l/g, `<span style="color:#EDE17F;">l</span>`)
                newStr += itemInStr
                break;

            case "m":
                itemInStr = s
                itemInStr = itemInStr.replace(/m/g, `<span style="color:#0041B2;">m</span>`)
                newStr += itemInStr
                break;

            case "n":
                itemInStr = s
                itemInStr = itemInStr.replace(/n/g, `<span style="color:#D476D7;">n</span>`)
                newStr += itemInStr
                break;

            case "o":
                itemInStr = s
                itemInStr = itemInStr.replace(/o/g, `<span style="color:#FDFFE2;">o</span>`)
                newStr += itemInStr
                break;

            case "p":
                itemInStr = s
                itemInStr = itemInStr.replace(/p/g, `<span style="color:#F2ACC7;">p</span>`)
                newStr += itemInStr
                break;

            case "q":
                itemInStr = s
                itemInStr = itemInStr.replace(/q/g, `<span style="color:#7C5E84;">q</span>`)
                newStr += itemInStr
                break;

            case "r":
                itemInStr = s
                itemInStr = itemInStr.replace(/r/g, `<span style="color:#5E2522;">r</span>`)
                newStr += itemInStr
                break;

            case "s":
                itemInStr = s
                itemInStr = itemInStr.replace(/s/g, `<span style="color:#F0EEEF;">s</span>`)
                newStr += itemInStr
                break;

            case "t":
                itemInStr = s
                itemInStr = itemInStr.replace(/t/g, `<span style="color:#FEFAC0;">t</span>`)
                newStr += itemInStr
                break;

            case "u":
                itemInStr = s
                itemInStr = itemInStr.replace(/u/g, `<span style="color:#260456;">u</span>`)
                newStr += itemInStr
                break;

            case "v":
                itemInStr = s
                itemInStr = itemInStr.replace(/v/g, `<span style="color:#3D043D;">v</span>`)
                newStr += itemInStr
                break;

            case "w":
                itemInStr = s
                itemInStr = itemInStr.replace(/w/g, `<span style="color:#988060;">w</span>`)
                newStr += itemInStr
                break;

            case "x":
                itemInStr = s
                itemInStr = itemInStr.replace(/x/g, `<span style="color:#140F0C;">x</span>`)
                newStr += itemInStr
                break;

            case "y":
                itemInStr = s
                itemInStr = itemInStr.replace(/y/g, `<span style="color:#EAE889;">y</span>`)
                newStr += itemInStr
                break;

            case "z":
                itemInStr = s
                itemInStr = itemInStr.replace(/z/g, `<span style="color:#202021;">z</span>`)
                newStr += itemInStr
                break;

                case "A":
                itemInStr = s
                itemInStr = itemInStr.replace(/A/g, `<span style="color:#C22123;">A</span>`)
                newStr += itemInStr
                break;

            case "B":
                itemInStr = s
                itemInStr = itemInStr.replace(/B/g, `<span style="color:#251B64;">B</span>`)
                newStr += itemInStr
                break;

            case "C":
                itemInStr = s
                itemInStr = itemInStr.replace(/C/g, `<span style="color:#DDB04E;">C</span>`)
                newStr += itemInStr
                break;

            case "D":
                itemInStr = s
                itemInStr = itemInStr.replace(/D/g, `<span style="color:#64504B;">D</span>`)
                newStr += itemInStr
                break;

            case "E":
                itemInStr = s
                itemInStr = itemInStr.replace(/E/g, `<span style="color:#EBFA55;">E</span>`)
                newStr += itemInStr
                break;

            case "F":
                itemInStr = s
                itemInStr = itemInStr.replace(/F/g, `<span style="color:#A888BC;">F</span>`)
                newStr += itemInStr
                break;

            case "G":
                itemInStr = s
                itemInStr = itemInStr.replace(/G/g, `<span style="color:#34923F;">G</span>`)
                newStr += itemInStr
                break;

            case "H":
                itemInStr = s
                itemInStr = itemInStr.replace(/H/g, `<span style="color:#DE6020;">H</span>`)
                newStr += itemInStr
                break;

            case "I":
                itemInStr = s
                itemInStr = itemInStr.replace(/I/g, `<span style="color:#170C10;">I</span>`)
                newStr += itemInStr
                break;

            case "J":
                itemInStr = s
                itemInStr = itemInStr.replace(/J/g, `<span style="color:#2C0984;">J</span>`)
                newStr += itemInStr
                break;

            case "K":
                itemInStr = s
                itemInStr = itemInStr.replace(/K/g, `<span style="color:#E73066;">K</span>`)
                newStr += itemInStr
                break;

            case "L":
                itemInStr = s
                itemInStr = itemInStr.replace(/L/g, `<span style="color:#EDE17F;">L</span>`)
                newStr += itemInStr
                break;

            case "M":
                itemInStr = s
                itemInStr = itemInStr.replace(/M/g, `<span style="color:#0041B2;">M</span>`)
                newStr += itemInStr
                break;

            case "N":
                itemInStr = s
                itemInStr = itemInStr.replace(/N/g, `<span style="color:#D476D7;">N</span>`)
                newStr += itemInStr
                break;

            case "O":
                itemInStr = s
                itemInStr = itemInStr.replace(/O/g, `<span style="color:#FDFFE2;">O</span>`)
                newStr += itemInStr
                break;

            case "P":
                itemInStr = s
                itemInStr = itemInStr.replace(/P/g, `<span style="color:#F2ACC7;">P</span>`)
                newStr += itemInStr
                break;

            case "Q":
                itemInStr = s
                itemInStr = itemInStr.replace(/Q/g, `<span style="color:#7C5E84;">Q</span>`)
                newStr += itemInStr
                break;

            case "R":
                itemInStr = s
                itemInStr = itemInStr.replace(/R/g, `<span style="color:#5E2522;">R</span>`)
                newStr += itemInStr
                break;

            case "S":
                itemInStr = s
                itemInStr = itemInStr.replace(/S/g, `<span style="color:#F0EEEF;">S</span>`)
                newStr += itemInStr
                break;

            case "T":
                itemInStr = s
                itemInStr = itemInStr.replace(/T/g, `<span style="color:#FEFAC0;">T</span>`)
                newStr += itemInStr
                break;

            case "U":
                itemInStr = s
                itemInStr = itemInStr.replace(/U/g, `<span style="color:#260456;">U</span>`)
                newStr += itemInStr
                break;

            case "V":
                itemInStr = s
                itemInStr = itemInStr.replace(/V/g, `<span style="color:#3D043D;">V</span>`)
                newStr += itemInStr
                break;

            case "W":
                itemInStr = s
                itemInStr = itemInStr.replace(/W/g, `<span style="color:#988060;">W</span>`)
                newStr += itemInStr
                break;

            case "X":
                itemInStr = s
                itemInStr = itemInStr.replace(/X/g, `<span style="color:#140F0C;">X</span>`)
                newStr += itemInStr
                break;

            case "Y":
                itemInStr = s
                itemInStr = itemInStr.replace(/Y/g, `<span style="color:#EAE889;">Y</span>`)
                newStr += itemInStr
                break;

            case "Z":
                itemInStr = s
                itemInStr = itemInStr.replace(/Z/g, `<span style="color:#202021;">Z</span>`)
                newStr += itemInStr
                break;


            default:
                newStr += s
                break;
        }

    }

    document.getElementById("greybgd").innerHTML = newStr;
    document.getElementById("greybgd").className += "display";
    document.getElementById("darkbgd").innerHTML = newStr;
    document.getElementById("darkbgd").className += "display";
    document.getElementById("lightbgd").innerHTML = newStr;
    document.getElementById("lightbgd").className += "display";
    document.getElementById("pinkbgd").innerHTML = newStr;
    document.getElementById("pinkbgd").className += "display";
    document.getElementById("greenbgd").innerHTML = newStr;
    document.getElementById("greenbgd").className += "display";

}

function clearAll() {
    document.getElementById("greybgd").innerHTML = "";
    document.getElementById("darkbgd").innerHTML = "";
    document.getElementById("lightbgd").innerHTML = "";
    document.getElementById("pinkbgd").innerHTML = "";
    document.getElementById("greenbgd").innerHTML = "";
    newStr = ""
}