// Attack 1: Automating dragging to halfway along the slider

// Send a message to the React app to move the slider to 90 degrees (halfway)
window.postMessage({ type: 'moveSlider', value: 90 }, '*');
