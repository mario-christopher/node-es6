import { Person } from './person';                                                      // Modules import/export

const init = () => {                                                                    // Arrow functions

    getES6Features()
        .then(features => {

            let john = new Person('John');                                              // Classes
            john.sayHello();

            console.log('The ES6 features that are implemented are :');
            features.forEach((feature, i) => console.log(`${i + 1} - ${feature}`));     // Template Strings
            console.log('');
        })
}

const getES6Features = () => {                                                          // const

    let es6Features1 = [                                                                // let
        'Arrow Functions',
        'Classes',
        'Template Strings',
    ];

    let es6Features2 = [
        'Destructuring',
        'Spread',
        'Let and Const',
        'Modules - export and import',
        'Promises'
    ];

    let allFeatures = [...es6Features1, ...es6Features2];                               //  Destructuring and Spread

    return Promise.resolve(allFeatures);                                                // Promise
}

init();