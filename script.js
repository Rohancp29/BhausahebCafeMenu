const items = document.querySelectorAll('.card');

document.querySelector('#grillSandwichBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'GrillSandwich') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#nonGrillSandwichBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'NonGrillSandwich') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#pizzaBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Pizza') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#burgerBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Burger') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#coldcoffeeBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'ColdCoffee') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#chocolatyBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Chocolaty') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#milkShaesBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'MilkShakes') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#mastaniBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Mastani') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#iceCreamesBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'IceCreames') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#cadBBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'cadB') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#hotBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'HOT') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#miscBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'MISC') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#mocktailBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Mocktail') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#brownieBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Brownies') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#allBtn').addEventListener('click', function() {
    items.forEach(element => {
        element.style.display = 'grid';
    });
})