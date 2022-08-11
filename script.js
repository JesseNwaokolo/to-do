function add(){
    var text = document.getElementById('text').value;
    var list = document.getElementById('list');

    var box = document.createElement('input');
    box.type = 'checkbox';
    var p = document.createElement('p');
    p.append(text);
    p.style.color = 'black'
    p.style.marginLeft = '5px'
    var div = document.createElement('div');


    div.style.display = 'flex';
    div.append(box);
    div.append(p)

    list.append(div)

    clear();

}

function clear(){
    var text = document.getElementById('text').value = '';

}