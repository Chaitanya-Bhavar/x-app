// import dotenv from "dotenv";
// // dotenv.config();
// import { fileURLToPath } from "url";


// import path from "path";
// import express from "express";

// import cookieParser from "cookie-parser";
// import { v2 as cloudinary } from "cloudinary";

// import authRoutes from "./routes/auth.route.js";
// import userRoutes from "./routes/user.route.js";
// import postRoutes from "./routes/post.route.js";
// import notificationRoutes from "./routes/notification.route.js";

// import connectMongoDB from "./db/connectMongoDB.js";


// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const app = express();
// const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

// app.use(express.json({ limit: "5mb" })); // to parse req.body
// // limit shouldn't be too high to prevent DOS
// app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

// app.use(cookieParser());

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/notifications", notificationRoutes);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// 	connectMongoDB();
// });

// // Load .env file
// dotenv.config({ path: path.resolve(__dirname, "../.env") });




//modify code acording to chatgpt for solution 

// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import express from "express";
// import cookieParser from "cookie-parser";
// import { v2 as cloudinary } from "cloudinary";

// import authRoutes from "./routes/auth.route.js";
// import userRoutes from "./routes/user.route.js";
// import postRoutes from "./routes/post.route.js";
// import notificationRoutes from "./routes/notification.route.js";
// import connectMongoDB from "./db/connectMongoDB.js";

// // Get the __dirname equivalent in ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ✅ Load environment variables before doing anything else
// dotenv.config({ path: path.resolve(__dirname, "../.env") });

// // ✅ Ensure MONGO_URI is loaded
// if (!process.env.MONGO_URI) {
// 	console.error("🚨 MONGO_URI is missing in .env file");
// 	process.exit(1);
// }

// // ✅ Configure Cloudinary
// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // ✅ Connect to MongoDB before starting the server
// connectMongoDB();

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/notifications", notificationRoutes);

// // ✅ Serve frontend in production mode
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "../frontend/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
// 	});
// }

// // ✅ Start the server after ensuring database is connected
// app.listen(PORT, () => {
// 	console.log(`✅ Server is running on port ${PORT}`);
// });




import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors"
// ✅ Ensure .env is loaded FIRST
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// ✅ Debug: Print loaded values
console.log("🔍 Checking MONGO_URI from server.js:", process.env.MONGO_URI ? "✅ Loaded" : "❌ Not Found");

import express from "express";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import connectMongoDB from "./db/connectMongoDB.js";

// ✅ Check if MONGO_URI is present, exit if missing
if (!process.env.MONGO_URI) {
	console.error("🚨 MONGO_URI is missing. Exiting...");
	process.exit(1);
}

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())
connectMongoDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`✅ Server is running on port ${PORT}`);
});
