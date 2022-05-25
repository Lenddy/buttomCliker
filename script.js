var count = 0
function counter(element) {
    count++;
    console.log(count);
    console.log(element);
    element.innerText = count;
}
var count2 = 0
function counter2(element) {
    count2++;
    console.log(count2);
    console.log(element);
    element.innerText = count2;
}

function hide(element) {
    element.remove();
}