import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import db from "../firestore";
import localPortfolio from "../data/portfolio";

const PortfolioContext = createContext(localPortfolio);

export function usePortfolio() {
  return useContext(PortfolioContext);
}

function isValidPortfolio(data) {
  return Boolean(data?.greeting?.name && Array.isArray(data?.experience) && data.experience.length);
}

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(localPortfolio);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const snap = await getDoc(doc(db, "portfolio", "content"));
        if (cancelled) return;

        if (snap.exists()) {
          const data = snap.data();
          if (isValidPortfolio(data)) {
            // Prefer Firestore, keep local keys as fill for any missing optional fields
            setPortfolio({ ...localPortfolio, ...data });
            return;
          }
        }
      } catch (err) {
        console.warn("Firestore portfolio load failed; using local portfolio.js.", err);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PortfolioContext.Provider value={portfolio}>
      {children}
    </PortfolioContext.Provider>
  );
}
