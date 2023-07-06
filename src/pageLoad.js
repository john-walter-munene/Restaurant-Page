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

    let inner = document.createElement('div');
    inner.classList.add('comb-inner');
    inner.classList.add(pageConfig[0]['inner']);

    // Loop through all but the first element of the given object creating and adding elements to the honeycomb
    for(let i=1; i<pageConfig.length; i++) {
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
        {
            'outer': 'info-hours-outer',
            'inner': 'info-hours-inner'
        },
        {
            'el': 'h3',
            'text': 'Hours',
            'class': 'hours'
        },
        {
            'el': 'p',
            'text': `Sunday: ${info.hours.sunday.open}am - ${info.hours.sunday.close}pm`,
            'class': 'sunday'
        },
        {
            'el': 'p',
            'text': `Monday: ${info.hours.monday.open}am - ${info.hours.monday.close}pm`,
            'class': 'monday'
        },
        {
            'el': 'p',
            'text': `Tuesday: ${info.hours.tuesday.open}am - ${info.hours.monday.close}pm`,
            'class': 'tuesday'
        },
        {
            'el': 'p',
            'text': `Wednesday: ${info.hours.wednesday.open}am - ${info.hours.wednesday.close}pm`,
            'class': 'wednesday'
        },
        {
            'el': 'p',
            'text': `Thursday: ${info.hours.thursday.open}am - ${info.hours.thursday.close}pm`,
            'class': 'thursday'
        },
        {
            'el': 'p',
            'text': `Friday: ${info.hours.friday.open}am - ${info.hours.friday.close}pm`,
            'class': 'friday'
        },
        {
            'el': 'p',
            'text': `Saturday: ${info.hours.saturday.open}am - ${info.hours.saturday.close}pm`,
            'class': 'saturday'
        },
    ]], 
    [[
        {
            'outer': 'info-location-outer',
            'inner': 'info-location-inner'
        },
        {
            'el': 'h3',
            'text': 'Location',
            'class': 'location',
        },
        {
            'el': 'p',
            'text': `${info.location.road}, ${info.location.building}, ${info.location.floor}`,
            'class': 'address'
        }
    ]]
}

// Creates a menu object to be used with the makeComb function
// Returns a menu object
function makeMenuItem(name, description, price, pic, alt) {
    return [
        {
            'outer': 'menu-outer',
            'inner': 'menu-inner'
        },
        {
            'el': 'h3',
            'text':name,
            'class': 'item-name',

        },
        {
            'el': 'p',
            'text': description,
            'class': 'item-description'
        },
        {
            'el': 'p',
            'text': price,
            'class': 'item-price'
        },
        {
            'el': 'img',
            'text': alt,
            'class': 'item-pic',
            'source': pic
        }
    ]
}

// Creates a review object to be used with the makeComb function
// Returns a review object
function makeReview(review, name) {
    return [
        {
            'outer': 'review-outer',
            'inner': 'review-inner'
        },
        {
            'el': 'p',
            'text': review,
            'class': 'review'
        },
        {
            'el': 'p',
            'text': name,
            'class': 'customer'
        }
    ]
}

// Creates a subtitle container with gold decorations
// Returns a complete subtitle element.
function makeSubTitleElements(subTitle, headingClass, containerClass) {
    // Create divs to overlap honeycomb looking background
    let container = document.createElement('div');
    container.classList.add('heading-container');

    let heading = document.createElement('div');
    heading.classList.add('heading');

    // Add Classes to optional divs if optional arguments are given.
    if (containerClass && containerClass != "") {
        container.classList.add(containerClass);
    }

    if (headingClass && headingClass != '') {
        heading.classList.add(headingClass);
    }

    // Create title element and hive decorations then bundle everything together.
    let title = document.createElement('h2');
    title.textContent = subTitle;

    heading.appendChild(title);
    container.appendChild(heading);

    let gold = container.createElement('img');
    gold.classList.add('decorations', 'sub-container-hive');
    gold.setAttribute('src', './img/gold.jpeg');

    container.appendChild(gold);

    return container;
}

// Creates a title Container with twi gold decorations.
// Returns a complete title element.
function makeTitleElements(pageTitle, goldClassOne, goldClassTwo, headingClass, containerClass) {
    // Create HTML elements, give them classes and attributes.
    let goldOne = document.createElement('img');
    goldOne.classList.add('decorations', goldClassOne);
    goldOne.setAttribute('src', './img/gold.jpeg');

    let goldTwo = document.createElement('img');
    goldTwo.classList.add('decorations', goldClassTwo);
    goldTwo.setAttribute('src', './img/gold.jpeg');

    let container = document.createElement('div');
    container.classList.add('heading-container');

    let heading = document.createElement('div');
    heading.classList.add('heading');

    let title = document.createElement('h1');
    title.textContent = pageTitle

    // Add Classes to respective divs if optional arguments are provided.
    if (containerClass && containerClass != '') {
        container.classList.add(containerClass)
    }

    if (headingClass && headingClass !='') {
        heading.classList.add(headingClass)
    }

    // Bundling everything together.
    heading.appendChild(title);
    container.appendChild(goldOne);
    container.appendChild(goldTwo);
    container.appendChild(heading);

    return container;
}

// Creates elements for each section of info object.
// Returns true.

function loadInfo(parent, info) {
    let infomation = makeInfo(info);

    infomation.forEach(section => {
        let infoComb = makeComb(section);
        parent.appendChild(infoComb);
    });

    return true;
}

// Clears the page, loads title and content.
// returns true.
function loadMain(type, parent, contents, title, info) {
    clearPage(parent);
    loadTitle(type, parent, title);

    contents.forEach(content => {
        if (type == 'home') {
            var contentConfig = makeReview(content.text, content.name);
        } else if (type == 'menu') {
            if (content.item) {
                var contentConfig = makeMenuItem(content.name, content.description, content.price, content.pic, content.alt);
            } else {
                var sectionTitle = makeSubTitleElements(content.subTitle, 'sub-heading', 'sub-container');
                parent.appendChild(sectionTitle);
                return;
            }
        } else {
            var contentConfig = makeContact(content.name, content.position, content.phone, content.email, content.pic, content.alt);
        }

        let contentComb = makeComb(contentConfig);

        parent.appendChild(contentComb);
    });

    if (type == 'home') {
        loadInfo(parent, info);

        let gold = document.createElement('img');
        gold.classList.add('decorations', 'gold');
        gold.setAttribute('src', './img/gold.jpeg');

        parent.appendChild(gold)
    }

    return true;
}

// Logic for creating and classing titles.
// Returns true
function loadTitle(type, parent, title) {
    if (type == 'home') {
        var titleElements = makeTitleElements(title.title, title.goldClassOne, title.goldClassTwo);
    } else if (type == 'contact') {
        var titleElements = makeTitleElements(title.title, title.goldClassOne, title.goldClassTwo, 'contact-heading', 'contact-container');
    } else if (type == 'menu') {
        var titleElements = makeTitleElements(title.title, title.goldClassOne, title.goldClassTwo, 'menu-heading', 'menu-container');
    } else {
        var titleElements = makeSubTitleElements(title.title);
    }

    parent.appendChild(titleElements);

    return true;
}

export { loadMain, changeBtnCover};