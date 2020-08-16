let text_written = false;

async function execute() {
    // otherwise we can't compute width...
    await document.fonts.load("12pt Lato");
    const response = await fetch('pho_bo.txt');
    const data = await response.text();
    const windowWidth = window.innerWidth;
    document.getElementById("text").innerHTML
        = [...new Set(data.split(/\r?\n/))] // de-dup
            // randomize
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
            .map((a) => linkHandle(a, windowWidth))
            .join("<br>");
    text_written = true;
}

function linkHandle(s, windowWidth) {
    const DOT_WIDTH = 3.776;
    // Number of dots across the row to the name
    const DOT_COUNT = Math.min(Math.max(windowWidth/11, 65), 130);
    let [handle,name] = s.split(",");
    return "<a href=\"https://instagram.com/"
        + handle.substring(1)
        + "\">"
        + handle
        + ".".repeat(Math.floor(DOT_COUNT - getTextWidth(handle, "12pt Lato")/DOT_WIDTH))
        + (name || "????") 
        + "</a>";
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

document.onload = execute();