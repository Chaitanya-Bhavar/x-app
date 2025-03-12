// import mongoose from "mongoose";
// const connectMongoDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URI);
// 		console.log(`MongoDB connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.error(`Error connection to mongoDB: ${error.message}`);
// 		process.exit(1);
// 	}
// };
// export default connectMongoDB;


// Chat Gpt  error solv trying

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// const connectMongoDB = async () => {
//     try {
//         console.log("MONGO_URI from DB file:", process.env.MONGO_URI); // Debugging

//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error connection to mongoDB: ${error.message}`);
//         process.exit(1);
//     }
// };

// export default connectMongoDB;



// import mongoose from "mongoose";

// const connectMongoDB = async () => {
// 	try {
// 		console.log("🔍 Checking MONGO_URI:", process.env.MONGO_URI); // Debugging

// 		if (!process.env.MONGO_URI) {
// 			throw new Error("🚨 MONGO_URI is missing or not loaded.");
// 		}

// 		const conn = await mongoose.connect(process.env.MONGO_URI, {
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true
// 		});

// 		console.log(`✅ MongoDB connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.error(`❌ Error connecting to MongoDB: ${error.message}`);
// 		process.exit(1);
// 	}
// };

// export default connectMongoDB;


import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        console.log("🔄 Connecting to MongoDB...");

        const conn = await mongoose.connect(process.env.MONGO_URI); // Removed deprecated options

        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectMongoDB;
