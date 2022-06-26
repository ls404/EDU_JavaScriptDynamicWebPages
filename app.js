const output = document.querySelector('.output');
console.log(output);

const url = 'list.json';
let myList = [];

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    output.textContent = "Loading..."
    fetch(url).then(rep=>rep.json())
    .then((data) => {
        myList = data;
        output.textContent = ""
        myList.forEach(el => {
            console.log(el);
            makeList(el);
        });
    })
    console.log(myList);
    console.log('-----------');
});

function makeList(item) {
    const div = document.createElement('div');
    div.innerHTML = `${item.name}   -   #(${item.guests})`;
    output.append(div);
    if(item.status === true) {div.classList.add('confirmed')}
    else {
        div.classList.add('notConfirmed')
    };
}