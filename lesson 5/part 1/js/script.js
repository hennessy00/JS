clsMenuItem = document.getElementsByClassName('menu-item');
clsMenuItemEmpty = clsMenuItem[0].cloneNode(false);
clsMenu = document.getElementsByClassName('menu')[0];
clsMenuItem[1].innerHTML = 'Второй пункт';
clsMenuItem[2].innerHTML = 'Третий пункт';
clsMenu.appendChild(clsMenuItemEmpty);
clsMenuItem[4].innerHTML = 'Пятый пункт';
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
document.getElementById('title').innerText = 'Мы продаем только подлинную технику Apple';
document.getElementsByClassName('adv')[0].remove();
answer = prompt('Как вы относитесь к технике apple ?','');
document.getElementById('prompt').innerText = answer;