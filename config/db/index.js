const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            `mongodb://mongo:8kO3TS1n4LEaoB4TlZfI@containers-us-west-11.railway.app:5624/courses?authSource=admin`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            },
        );
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}
module.exports = { connect };
