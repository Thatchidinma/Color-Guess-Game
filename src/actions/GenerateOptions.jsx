// function to generate 5 shades of the generated colored and the color it self 

export function generateColorOptions(color) {
    const match = color.match(/\(([^)]+)\)/);
    const rgbValues = match[1].split(',').map(Number)

    //Function to create shades of the original color 
    function darken(color, factor) {
        return {
            r: Math.max(0, Math.floor(color[0] * factor)),
            g: Math.max(0, Math.floor(color[1] * factor)),
            b: Math.max(0, Math.floor(color[2] * factor))
        };
    }

    const shadingFactors = [0.9, 0.75, 0.6, 0.45, 0.8];  // Factors for darkening the color
    const shades = shadingFactors.map(factor => `rgb(${ Object.keys(darken(rgbValues, factor)).map((key) => [darken(rgbValues, factor)[key]])})`);
    shades.push(color);  // Add the original color at the end of the array
    const rearrangedShades = shades.map(colors => colors).sort(()=> Math.random() - 0.5)


    return rearrangedShades;
}