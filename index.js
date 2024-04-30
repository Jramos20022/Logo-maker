const inquirer = require('inquirer');

function promptText() {
    return inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:'
    });
}

function promptTextColor() {
    return inquirer.prompt({
        type: 'input',
        name: 'color',
        message: 'Enter the text color (keyword or hexadecimal):'
    });
}

const { SVG } = require('@svgdotjs/svg.js');

function generateSVG(text, textColor, shape, shapeColor) {
    const svg = SVG().size(300, 200);

    // Add text element
    svg.text(text)
       .font({ size: 48 })
       .fill(textColor)
       .move(50, 100);

    // Add shape element (example: circle)
    if (shape === 'circle') {
        svg.circle(100)
           .fill(shapeColor)
           .move(150, 50);
    }

    // Add other shapes as needed (triangle, square, etc.)

    return svg;
}

function saveSVG(svg) {
    svg.write('logo.svg', () => {
        console.log('Generated logo.svg');
    });
}