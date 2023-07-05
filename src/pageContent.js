let contacts = [
    {
        'name': "John Walter",
        'position': "Senior Chef",
        'Phone': "+254726723013",
        'email': "midwaymaster10@gmail.com",
        'pic': "./img/johnwalter.jpg",
        'alt': "John Walter's Photo"
    },
    {
        'name': "Walter Munene",
        'position': "Junior Chef",
        'phone': "+254787331838",
        'email': "waltznesh@gmail.com",
        'pic': "./img/waltermunene.jpg",
        'alt': " Walter Munene's Photo"
    },
    {
        'name': "Munene Njeru",
        'position': "Chief Executive Officer",
        'phone': "+254726674204",
        'email': "midwaymastertechnologies@gmail.com",
        'pic': "./img/munenenjeru.jpg",
        'alt': "Munene Njeru's Photo"
    }
]

let info = {
    'hours': {
        'sunday': {
            'open': 8,
            'close': 5
        },
        'monday': {
            'open': 6,
            'close': 10
        },
        'tuesday': {
            'open': 6,
            'close': 10
        },
        'wednesday': {
            'open': 6,
            'close': 10
        },
        'thursday': {
            'open': 6,
            'close': 8
        },
        'friday': {
            'open': 6,
            'close': 11
        },
        'saturday': {
            'open': 8,
            'close': 11
        },
        'location': {
            'road': "Kindaruma road, off Ngong Road, Kamburu drive",
            'building': "Top Plaza",
            'floor': "5th Floor, room 9"
        }
    }
}

let menu = [
    {
        'item': false,
        'subtitle': "Drinks",
    },
    {
        'item': true,
        'name': "Green tea",
        'description': "Warm, green tea, right from the slopes of Mt. Kenya, just to start your day off..!",
        'price': "Ksh 200",
        'pic': "./img/greentea.webp",
        'alt': "Pic for green tea."
    },
    {
        'item': true,
        'name': "Red tea",
        'description': "Hot, red tea, fetched from the evergreen highlands of the Rift Valley, Kericho zones.",
        'price': "Ksh", 
        'pic': "./img/redtea.webp",
        'alt': "Pic for red tea.",
    },
    {
        'item': false,
        'subtitle': "Snacks"
    },
    {
        'item': true,
        'name': "Chocolate Donoughts",
        'description': "A sweet donought, immersed in brown chocolate.",
        'price': "Ksh 250",
        'pic': "./img/chocolatedonoughts.webp",
        'alt': "Chocolate Donoughts Photo"
    },
    {
        'item': true,
        'name': "Butter Donoghts",
        'description': "Honey and natural milk butter made donoughts.",
        'price': "Ksh 300",
        'pic': "./img/butterdonoughts.jpeg",
        'alt': "Butter Donought's Photo"
    },
    {
        'item': false,
        'subtitle': "Main Dishes"
    },
    {
        'item': true,
        'name': "Pancakes",
        'description': "Super heavy round and tasty brown baked cakes over the pan.",
        'price': "Ksh 350",
        'pic': ".img/pancakes.webp",
        'alt': "Photo of Pancakes"
    },
    {
        'item': true,
        'name': "Butter Toast",
        'description': "Enjoy a toast buttered with our natural delamere products.",
        'price': "Ksh 400",
        'pic': "./img/buttertoast.webp",
        'alt': "Photo for butter toast"
    },
    {
        'item': true,
        'name': "Roast Potatoes",
        'description': "Natural Kikuyu roasted potoates packed with some green vegetables.",
        'price': "Ksh 500",
        'pic': "./img/roastPotatoes.jpeg",
        'alt': "Photo of roast potatoes"
    },
    {
        'item': true,
        'name': "Ugali Fish",
        'description': "Fresh fish from the shores of Lake Victoria, served with Corn Cake.",
        'price': "Ksh 700",
        'pic': "./img/ugaliFish.webp",
        'alt': "Photo of Ugali Fish"
    },
    {
        'item': true,
        'name': "Chapo Beans",
        'description': "Hot Chapati served with yellow beans and some bone soup.",
        'price': "Ksh 400",
        'pic': "./img/chapoBeans.webp",
        'alt': "Photo of Chapati Beans"
    },
    {
        'item': true,
        'name': "Githeri",
        'description': "Super Githeri made by the famous Githeri Man...!",
        'price': "Ksh 700",
        'pic': "./img/githeri.webp",
        'alt': "Photo of githeri"
    },
    {
        'item': true,
        'name': "Mbuzi Choma", 
        'description': "Roasted goat meat packed with 2 beers.",
        'price': "Ksh 1500",
        'pic': "./img/roastedGoat.webp",
        'alt': "Photo of roasted goat"
    },
    {
        'item': true,
        'name': "Rice Beef",
        'description': "Rice and beef bundled with hot soup.",
        'price': "Ksh 2000",
        'pic': "./img/riceBeef.webp",
        'alt': "Photo of Rice and Beef"
    }
]

let reviews = [
    {
        'text': "Gold Star Cafe is one of the coolest places to have a refresher when travveling along Ngong road. The prices are favorable and you'll always want to return.",
        'name': "Mike"
    }
]

let homeTitle = {
    'title': "Gold Star Cafe",
    'goldClassOne': "gold-left",
    'goldClassTwo': "gold-right"
}

let menuTitle = {
    'title': "Menu",
    'goldClassOne': "menu-gold-left",
    'goldClassTwo': "menu-gold-right"
}

let contactTitle = {
    'title': "Contact Us",
    'goldClassOne': "contact-gold-left",
    'goldClassTwo': "contact-gold-right"
}

export { contacts, info, menu, reviews, homeTitle, menuTitle, contactTitle}