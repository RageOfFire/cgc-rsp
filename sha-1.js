const crypto = require("crypto");
const fs = require("fs");

// Generate a random SHA-1 hash
const sha1 = crypto
    .createHash("sha1")
    .update(crypto.randomBytes(32))
    .digest("hex");

// Save to SHA-1.txt
fs.writeFileSync("SHA-1.txt", sha1, "utf8");

// Display the result
console.log("Generated SHA-1:");
console.log(sha1);
console.log("Saved to SHA-1.txt");