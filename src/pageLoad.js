// How the Content is loaded.

// Show the new tab, through an Id
function changeBtnCover(oldTab, newTab) {
    let hide = document.getElementById(`cover${oldTab}`);
    let show = document.getElementById(`cover${newTab}`);

    hide.classList.add('hidden');
    show.classList.remove('hidden');

    return newTab;
}

// Remove all the content from a given element,
// Return true.
function clearPage(parent) {
    parent.textContent = '';
    return true;
}

// Creates html elements for a honeycomb-looking hexagon on the page
// Returns a complete honeycomb element
function makeComb(pageConfig) {
    // Makes two overlapping hexagons and adds classes from the objects.
    let outer = document.createElement('div');
    outer.classList.add('comb-outer');
    outer.classList.add(pageConfig[0]['outer']);

    let inner = document.createElement('dic');
    inner.classList.add('comb-inner');
    inner.classList.add(pageConfig[0]['inner']);

    // Loop through all but the first element of the given object creating and adding elements to the honeycomb
    for(let i=1; i<pageConfig.length; 1++) {
        if (pageConfig[i]['el'] == 'p') {
            var element = document.createElement('p');
            let elementText = document.createTextNode(pageConfig[i]['text']);

            element.appendChild(elementText);
        } else if (pageConfig[i]['el'] == 'h3') {
            var element = document.createElement('h3');
            let elementText = document.createTextNode(pageConfig[i]['text']);

            element.appendChild(elementText);
        } else {
            var element = document.createElement('dic');
            element.style.backgroundImage = `url(${pageConfig[i]['source']})`;
            element.setAttribute('title', pageConfig[i][text]);
        }

        element.classList.add(pageConfig[i]['class']);

        inner.appendChild(element)
    }

    outer.appendChild(inner);

    return outer;
}

// Creates a contact object to be used with the makeComb function
// Returns a contact object

function makeContact(name, position, phone, email, pic, alt) {
    return [
        {
            'outer': 'contact-outer',
            'inner': 'contact-inner'
        },
        {
            'el': 'h3',
            'text': name,
            'class': 'person'
        },
        {
            'el': 'p',
            'text': position,
            'class': 'position'
        },
        {
            'el': 'p',
            'text': phone,
            'class': 'phone',
        },
        {
            'el': 'p',
            'text': email,
            'class': 'email'
        },
        {
            'el': 'img',
            'text': alt,
            'class': 'contact-pic',
            'source': pic
        }
    ]
}

// Creates a info object to be used with the makeComb function
// Returns a info object

function makeInfo(info) {
    return [[

    ]]
}

// Creates a menu object to be used with the makeComb function
// Returns a menu object
function makeMenuItem(name, description, price, pic, alt) {
    return [

    ]
}

// Creates a review object to be used with the makeComb function
// Returns a review object
function makeReview(review, name) {
    return [
        
    ]
}

