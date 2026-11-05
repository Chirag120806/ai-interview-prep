require("dotenv").config();

const dns = require("node:dns");
dns.setServers(['8.8.8.8', '1.1.1.1'])

const cors = require('cors');


const app = require('./src/app');
app.use(cors());
const connectToDB = require('./src/config/database');

const port = Number(process.env.PORT) || 3000;

async function startServer() {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured. Check Backend/.env");
    }
    if (!process.env.GOOGLE_GENAI_API_KEY) {
        throw new Error("GOOGLE_GENAI_API_KEY is not configured. Check Backend/.env");
    }
    await connectToDB();
    app.listen(port, () => console.log(`Server is running on port ${port}`));
}

startServer().catch((error) => {
    console.error("Unable to start server:", error);
    process.exit(1);
});
