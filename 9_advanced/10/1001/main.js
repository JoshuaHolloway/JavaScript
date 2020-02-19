// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Generate some synthetic data for training.
const x = [1, 2, 3, 4];
const y = [1, 3, 5, 7];
const xs = tf.tensor2d(x, [4, 1]);
const ys = tf.tensor2d(y, [4, 1]);

const x_ = 5;
let y_ = [];

// Train the model using the data.
model.fit(xs, ys, { epochs: 10 }).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([x_], [1, 1])).print();

    // Open the browser devtools to see the output
});

console.log('main.js');


function setup() {
    const x1 = 0;
    const y1 = 50;
    const x2 = 40;
    const y2 = 60;


    for (let i = 0; i < x.length; i++) {
        // scale to see them
        x[i] *= 100;
        y[i] *= 100;
    }

    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(1024, 1024);
    background(0);
    noSmooth();

    // Make the points 10 pixels in size
    strokeWeight(10);

    // Draw white points
    stroke(255);

    for (let i = 0; i < x.length; i++) {
        point(x[i], y[i]);
    }

    // Estimated point:
    stroke(255, 0, 0);
    // point();

}
function draw() {

}
