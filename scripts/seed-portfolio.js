/**
 * Seeds Firestore portfolio/content from src/data/portfolio.js (real resume keys).
 * Usage: npm run seed:portfolio
 */
const fs = require("fs");
const path = require("path");
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  fs.readFileSync(filePath, "utf8")
    .split("\n")
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const eq = trimmed.indexOf("=");
      if (eq === -1) return;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    });
}

loadEnv(path.join(__dirname, "..", ".env"));

function loadPortfolio() {
  const file = fs.readFileSync(
    path.join(__dirname, "..", "src", "data", "portfolio.js"),
    "utf8"
  );
  const withoutExport = file.replace(/export\s+default\s+portfolio\s*;?\s*$/m, "");
  // eslint-disable-next-line no-eval
  const portfolio = eval(`${withoutExport}; portfolio`);
  return portfolio;
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

async function main() {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error("Missing REACT_APP_FIREBASE_* env vars");
  }

  const portfolio = loadPortfolio();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  await setDoc(doc(db, "portfolio", "content"), {
    ...portfolio,
    updatedAt: new Date().toISOString(),
  });

  console.log("Seeded portfolio/content");
  console.log("Keys:", Object.keys(portfolio).join(", "));
}

main().catch((err) => {
  console.error("Seed failed:", err.code || "", err.message || err);
  console.error(
    "\nIf permission-denied: in Firebase Console → Firestore → Rules, temporarily:\n" +
      "  match /portfolio/{docId} { allow read, write: if true; }\n" +
      "Re-run npm run seed:portfolio, then set write: if false (keep read: if true)."
  );
  process.exit(1);
});
