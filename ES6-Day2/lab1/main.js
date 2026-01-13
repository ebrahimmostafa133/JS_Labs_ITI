class Shape {
    static count = 0;

    constructor() {
        Shape.count++;
    }

    static getCount() {
        return Shape.count;
    }

    area() {
        throw new Error("Method 'area()' must be implemented.");
    }

    perimeter() {
        throw new Error("Method 'perimeter()' must be implemented.");
    }

    toString() {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}

class Rectangle extends Shape {
    static instance = null;
    constructor(width, height) {
        if (Rectangle.instance) {
            console.log("rectangle already exists");
            return Rectangle.instance;
        }
        super();
        this.width = width;
        this.height = height;
        Rectangle.instance = this;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    static instance = null;
    constructor(side) {
        if (Square.instance) {
            console.log("square already exists");
            return Square.instance;
        }
        super();
        this.side = side;
        Square.instance = this;
    }
    area() {
        return this.side * this.side;
    }
    perimeter() {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Testing the classes
const rect1 = new Rectangle(4, 5);
console.log(rect1.toString());

const rect2 = new Rectangle(6, 7); // "rectangle already exists"
console.log(rect2.toString());

const square1 = new Square(4);
console.log(square1.toString());

const square2 = new Square(5); //  "square already exists"
console.log(square2.toString());

const circle1 = new Circle(3);
console.log(circle1.toString());
const circle2 = new Circle(5);
console.log(circle2.toString());
console.log(`Total shapes created: ${Shape.getCount()}`); // 4