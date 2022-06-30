/*
AUTHOR: Jasiukiewicz Tymon
GITHUB: https://github.com/jasiukiewicztymon
*/

// Class changes observation

export function lightObserve(classes) {
    new MutationObserver((mutations) => {
        for (let i in mutations) {
            // in case of the element creation
            mutations[i].addedNodes.forEach(el => {
                el.classList.forEach(cel => {
                    if (classes.indexOf(cel) === -1) {
                        classes.push(cel)
                        var classParams = cel.split(':');
                        for (var j in cel.split(':')) {
                            var temp = cel.split(':')[j]
                            classParams = temp.split('-')
                        }
                        console.log(classParams)
                    }
                })
            })
            // in case of the element class addition
            mutations[i].target.classList.forEach(el => {
                if (classes.indexOf(el) === -1) {
                    classes.push(el)
                }
            })
        }
        console.log(classes)
    }).observe(document.querySelector('body'), { attributes: true, subtree: true, childList: true });
}