/*
AUTHOR: Jasiukiewicz Tymon
GITHUB: https://github.com/jasiukiewicztymon
*/

// Getting all the existing classes at the document creation

export function getAllClasses() {
    let allClasses = [];
    let allElements = document.querySelectorAll('*');
    for (let i = 0; i < allElements.length; i++) {
        let classes = allElements[i].className.toString().split(/\s+/);
        for (let j = 0; j < classes.length; j++) {
            let cls = classes[j];
            if (cls && allClasses.indexOf(cls) === -1)
                allClasses.push(cls);
        }
    }
    return allClasses;
}