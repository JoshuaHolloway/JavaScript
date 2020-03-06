class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    coordinates() {
        return [this.x, this.y];
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

const P1 = p1.coordinates();
console.log(P1);

const P2 = p2.coordinates();
console.log(P2);

const d = Point.distance(p1, p2);
console.log(d);

console.log('Distance between points (' + P1 + ') and (' + P2 + ') is ' + d);