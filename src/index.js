// to load unofficial theme the user have to download LightWindCSS to local and do changes there in the lightTheme.json
import { lightObserve } from './observeClasses.js'
import { getAllClasses } from './classesDetection.js'
import lightWindTheme from './lightTheme.json' assert {type: 'json'}

var LightJsClasses, lightWindCssConfig = lightWindTheme.default;

window.addEventListener('load', () => {
    // Getting all classes
    LightJsClasses = getAllClasses()

    // create style tag with all the content
    for (var i in LightJsClasses) {
        var classParams = LightJsClasses[i].split(':');
        for (var j in LightJsClasses[i].split(':')) {
            var temp = LightJsClasses[i].split(':')[j]
            classParams[j] = temp.split('-')
        }
        console.log(classParams)
    }

    // observing the DOM
    lightObserve(LightJsClasses)
})