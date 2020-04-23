export class Movement {
    constructor(grid, shape, key) {
        this.grid = grid;
        this.shape = shape;
        this.key = key;
    }

    moveShape() {
        switch (this.key) {
            case 'ArrowUp':
                this.moveUp();
                break;
            case 'ArrowDown':
                this.moveDown();
                break;
            case 'ArrowLeft':
                this.moveLeft();
                break;
            case 'ArrowRight':
                this.moveRight();
                break;
            case 'Enter':
                this.changeShapeColor();
                break;
        }
    }

    moveUp() {
        this.grid.draw();
        this.shape.moveUp();
        this.shape.draw();
    }

    moveDown() {
        this.grid.draw();
        this.shape.moveDown();
        this.shape.draw();
    }

    moveRight() {
        this.grid.draw();
        this.shape.moveRight();
        this.shape.draw();
    }

    moveLeft() {
        this.grid.draw();
        this.shape.moveLeft();
        this.shape.draw();
    }

    changeShapeColor() {
        this.grid.draw();
        this.shape.changeColor();
        this.shape.draw();
    }
}