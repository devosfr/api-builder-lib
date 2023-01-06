const Build = require('@oseiasfreitas/front-builder');
const entry = require('prompt-sync')({sigint: true});
let flowName = null;

flowName = entry('Enter the flow name: ');
console.log('Flow name: ' + flowName);

endpointType = entry('What is the endpoint type? (get, getById, post, put or delete): ');
console.log('Hierarchy: ' + endpointType)

Build.makePage(flowName , endpointType);