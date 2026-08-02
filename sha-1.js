const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

// 1. Path to your actual resource pack zip file
const filePath = path.join(__dirname, "MyServerPack.zip");

try {
    // 2. Read the binary data of the zip file
    const fileBuffer = fs.readFileSync(filePath);

    // 3. Generate the SHA-1 hash from the file's data
    const sha1 = crypto
        .createHash("sha1")
        .update(fileBuffer)
        .digest("hex");

    // 4. Save the correct hash string to SHA-1.txt
    fs.writeFileSync("SHA-1.txt", sha1, "utf8");

    // Display the result
    console.log("Generated SHA-1 for the file:");
    console.log(sha1);
    console.log("Saved to SHA-1.txt");

} catch (error) {
    console.error("Error reading file:", error.message);
    console.log("Make sure your zip file is in the same folder and the name matches exactly.");
}
