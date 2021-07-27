const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://nlopez4:<password>@cluster0.byfoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 




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









// mongoose
// 	.connect(process.env.DATABASE_URL || dbUrl, configs)
// 	.then(() =>
// 		console.log(
// 			`MongoDB successfully connected at ${db.host}:${db.port}! How dope!`
// 		)
// 	)
// 	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));




//   module.exports = {
//       workoutlog: require('./workoutlog')
// }