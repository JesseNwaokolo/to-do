function submit(){
    var ul = document.getElementById('ulist');
    var li = document.createElement('li')
    var node = document.getElementById('input').value;
    li.append(node);
    ul.appendChild(li);
    clear();

    function clear(){
        var clear = document.getElementById('input').value = ''
    }
}