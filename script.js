// Display HTML with javascript


var newParagraf = window.document.createElement('p');
var guillaume = window.document.createTextNode('Guillaume');
newParagraf.appendChild(guillaume);



// Create button to display element on DOM

var newButton = windows.document.createElement('button');
var text = windows.document.createTextNode('click me');
newButton.appendChild(text);
newButton.addEventListener('click', function ()
{ document.body.appendChild(newParagraf); } );

document.body.appendChild(newButton);



// To 'check' objects

var guillaume = {
    name: guillaume,
    age: 32
};

if (guillaume.hasOwnProperty('name'))
{console.log('guillaume has property name');
};

if (!guillaume.hasOwnProperty('name'))
{guillaume.name = 'Guillaume';
};
console.log(guillaume);

if (guillaume.hasOwnProperty('name'))
{console.log(guillaume.name.indexOf('Guillaume'));
};



// forEach, filter and map
*/
var person =
[
{ name: 'Guillaume',
  age: 32,
  spec: {size: '180 cm',
         weight: 80    
  }
},

{ name: 'Jim',
    age: 40,
    spec: {size: '188 cm',
           weight: 88    
    }
  },

{ name: 'Carla',
    age: 42,
    spec: {size: '170 cm',
           weight: 70    
    }
  },
];

person.forEach(function ()
{console.log('there is one person');
});

person.forEach(function (object, index)
{console.log('there is one person');
 console.log(index);
 console.log(object);   
});



let findGuillaume = person.filter( function (x)
{x.name === 'Guillaume';
});
console.log(findGuillaume);

let findGuillaume = person.filter(function (x)
{x.age < 32;
}
);
console.log(findGuillaume);


let findGuillaume = person.map( function (x)
{x.age++
}
);
console.log(findGuillaume);




// Build a search filter

function emptyResponses ()
{
document.getElementById('responses').innerHTML = '';
}


function filterPersons(name)
{ 
emptyResponses();
var results = person.filter(function(x)
 {return x.name === name;  
})


results.forEach(function(respons)  // respons = 'zoals x'
{if (respons) {createParagraph(respons.name);
}})}


function createParagraph(text)
{var newDiv = document.createElement('p');
var newText = document.createTextNode(text);
newDiv.appendChild(newText);
document.getElementById('responses').appendChild(newDiv);
}


var newInput = window.document.createElement('input');
newInput.addEventListener('input', function(event)
{
  if (event.target.value.length > 0)
  {
  filterPersons(event.target.value);
}
})
document.body.appendChild(newInput);


var newResponses = window.document.createElement('DIV');
newResponses.setAttribute('id', 'responses');
document.body.appendChild(newResponses);




// Basic use of for loop in HTML

for(let i = 0; i < person.length; i++)
{
var newDiv = windows.document.createElement('DIV');
var text = window.document.createTextNode(person[i].name);
newDiv.appendChild(text);
document.body.appendChild(newDiv);
};

for(let i = 0; i < person.length; i++)
    {
    var template = 'Name:' + person[i].name +'Age:' + person[i].age;   
    var newDiv = windows.document.createElement('DIV');
    var text = window.document.createTextNode(template);
    newDiv.appendChild(text);
    document.body.appendChild(newDiv);
    };




// Factories functions

var person = [];

var createPerson = function (name, age, city)
{ return {
  name,
  age,
  city
}}

console.log(createPerson('Guillaume', 32, 'Paris'));

var newPerson = createPerson('Guillaume', 32, 'Paris');
person.push(newPerson);
console.log(person);


var createPerson = (name, age, city) =>
  ({
    name,
    age,
    city
  })


var createPerson = function (name, age, city)
{ return {
  name,
  age,
  city,
  origin: 'persons',
  setName: function (name)
  {this.name = name
}}}

console.log(createPerson('Guillaume', 32, 'Paris'));




// Promises

var promise1 = new Promise( (resolve, reject) =>
  {console.log('done');
    resolve()
  })
   
  promise1


var promise1 = new Promise( (resolve, reject) =>
  {setTimeout( () =>
  {resolve('finished after 5 seconds')
  }, 5000)})
   
  promise1.then( (data) =>
  {console.log(data)
  })


var promise1 = new Promise( (resolve, reject) =>
{setTimeout( () =>
{reject('error')}, 5000)})

promise1.catch((err) =>
{console.log(err);
})


var promise1 = new Promise ((resolve, reject) =>
{setTimeout( () =>
{reject('error')
}, 5000)
})

promise1.finally( () =>
console.log('whatever')
)




// ES6 & ES7:  new JS features

let myVariable = 'hello world';
const myVariableB = 'dag wereld';


var b = () =>
{
}


let person = ['Jim', 47, 'Paris'];
console.log(person.includes('Jim'))


let guillaume = {
  name: 'Guillaume',
  age: 42
}

let {name, age} = guillaume;
console.log(name);
console.log(age);


console.log(Object.keys(guillaume))
console.log(Object.values(guillaume))
for (var [key, values] of Object.entries(guillaume))
{console.log(key, values)
}


let group1 = ['Jim', 'Carla'];
let group2 = ['Geert'];
let newGroup = [...group1, ...group2];
console.log(newGroup);


let group3 = {'John': {age: 30}}
let group4 = {'Jane': {age: 32}}
let newGroup2 = {...group3, ...group4};
console.log(newGroup2);


var myFunction = async () =>
{await alert('Bevestig')}
myFunction();


let guillaume = 'Guillaume';
console.log('My name is ${guillaume}');


