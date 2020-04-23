// Implementati shape-urile ramase si afisati-le pe grid.
// Schimbati culoarea formei la ficare apasare de "ENTER".
// Mutati logica de movment intro clasa separata numita Movement si folositi-o pentru formele voastre.
// Adaugati clasa Shape si folositi-o ca base class pentru formele create, mutati logica comuna in base class.

import { Grid } from './grid.js';
import { Z } from './shapes/z-shape.js';
import { T } from './shapes/t-shape.js';
import { J } from './shapes/j-shape.js';
import { O } from './shapes/o-shape.js';
import { S } from './shapes/s-shape.js';
import { I } from './shapes/i-shape.js';
import { L } from './shapes/l-shape.js';
import { Movement } from './movement.js';


const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

const lShape = new L(0, 1, grid.cells);
lShape.draw();

const iShape = new I(0, 4, grid.cells);
iShape.draw();

const sShape = new S(0, 6, grid.cells);
sShape.draw();

const zShape = new Z(5, 1, grid.cells);
zShape.draw();

const tShape = new T(5, 6, grid.cells);
tShape.draw();

const oShape = new O(8, 3, grid.cells);
oShape.draw();

const jShape = new J(8, 6, grid.cells);
jShape.draw();


document.addEventListener("keydown", event => {
    console.log(event.key);
    const movement = new Movement(grid, iShape, event.key);
    movement.moveShape();
});

// setInterval(() => {
//     grid.draw();
//     zShape.moveDown();
//     zShape.draw();
// }, 500);