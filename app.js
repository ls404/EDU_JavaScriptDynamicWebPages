const output = document.querySelector('.output');
console.log(output);

const url = 'list.json';

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    output.textContent = "Loading..."
    fetch(url).then(rep=>rep.json())
    .then((data) => {
        console.log(data);
        output.textContent = ""
        data.forEach(el => {
            console.log(el);
            makeList(el);
        });
    })
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