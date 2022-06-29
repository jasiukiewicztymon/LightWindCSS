// Class changes observation

new MutationObserver((mutations) => {
    for (i in mutations) {
        if (mutations[i].attributeName === 'class') {
            console.log(mutations[i].target.classList);
            // add classes in the style tag
        }
    }
}).observe(document.querySelector('body'), { attributes: true, subtree: true });