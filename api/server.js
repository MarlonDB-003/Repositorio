import "dotenv/config";
import app from "./src/app.js";

const PORT = 3002;

app.listen(PORT, () => {
    console.log("Servidor FUNCIONANDO!")
});