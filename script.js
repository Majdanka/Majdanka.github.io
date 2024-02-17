const urls = [
  'https://media.tenor.com/yk8nhx3fZGYAAAAj/sebas-bleizeffer.gif',
  './gato.png'
];

document.querySelector('img').src = urls[1];

var counter = 0;

document.getElementById('y').onclick = function() { SheSaidYes(); };

document.getElementById('n').addEventListener('click', function() {
    WhyWouldYouDoThat(counter);
});

function WhyWouldYouDoThat(c) {
  switch (c) {
    case 0:
        document.getElementById('n').innerText = 'Are you sure?';
        document.getElementById('y').style.fontWeight = 900;
        break;
    case 1:
        document.getElementById('n').innerText = 'Really really sure?';
        document.getElementById('y').style.fontSize = '2em';
        break;
    case 2:
        document.getElementById('n').innerText = 'Last chance...';
        document.getElementById('y').style.fontSize = '3em';
        document.getElementById('y').style.textDecoration = 'underline';
        break;
    case 3:
        document.getElementById('n').innerText = 'Yes';
        break;
    case 4:
        SheSaidYes();
  }
    counter++;
}

function SheSaidYes() {
    document.querySelector('img').src = urls[0];
    document.querySelectorAll('div')[1].style.display = 'none'; 
    document.querySelector('h1').innerText = 'OMGGGGG!';
}