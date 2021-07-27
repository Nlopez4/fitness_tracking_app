
const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://user:tP7sIbcqLSHR5sbs@cluster0.byfoq.mongodb.net/fitness?retryWrites=true&w=majority'; 




const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);










