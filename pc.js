currenltyToggled = '';

function show(menuId) {
    var header = document.getElementById('body');
    document.getElementById('n' + menuId).style.fontSize = "30px";
    // un-toggle all the other currently toggled one, if there is one
    if (currenltyToggled != '' 
    && !document.getElementById(currenltyToggled).classList.contains('hidden')
    && currenltyToggled != menuId)
        document.getElementById(currenltyToggled).classList.toggle('hidden');
    
    document.getElementById(menuId).classList.toggle('hidden'); // toggle it
    
    if (document.getElementById(menuId).classList.contains('hidden')) {
        document.getElementById("name-container").classList.remove('hidden');
        for (var i = 1; i <= 7; i++) {
            if (('nh' + i) != 'n' + menuId) {
                document.getElementById('nh' + i).classList.toggle('hidden');
            }
            else {
                if (menuId == 'h4')
                    document.getElementById('n' + menuId).style.fontSize = "50px";
                else
                    document.getElementById('n' + menuId).style.fontSize = "25px";
            }
        }
    }
    else {
        for (var i = 1; i <= 7; i++) {
            if (('nh' + i) != 'n' + menuId) {
                document.getElementById('nh' + i).classList.toggle('hidden');
            }
        }
        document.getElementById("name-container").classList.add('hidden');
    }

    currenltyToggled = menuId; // set the currently toggled one

}