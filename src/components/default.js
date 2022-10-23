import * as components from './components.js'
const P5UI = {}
P5UI.install = (app) => {
    const component_names = Object.keys(components)
    const vue_components = component_names.map((name) => components[name])
    vue_components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default P5UI