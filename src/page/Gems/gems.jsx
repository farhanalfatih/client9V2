import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GemCard from "../../components/cardgem/card";
import { gemPackages } from "../../components/cardgem/gem";
import Banner from "../../components/Benner";
import Footer from "../../components/footer/Footer";

const Gem = () => {
  const [nickname, setNickname] = useState("");
  const [platform, setPlatform] = useState("java");
  const [showNicknameInput, setShowNicknameInput] = useState(true);

  const isNicknameValid = nickname.trim() !== "";
  const formattedNickname =
    platform === "bedrock" ? `.${nickname}` : nickname;

  useEffect(() => {
    const savedNick = localStorage.getItem("nickname");
    const savedPlatform = localStorage.getItem("platform");

    if (savedNick && savedPlatform) {
      setNickname(savedNick);
      setPlatform(savedPlatform);
      setShowNicknameInput(false);
    }
  }, []);

  const handleContinue = () => {
    if (isNicknameValid) {
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("platform", platform);
      setShowNicknameInput(false);
    }
  };

  return (
    <>
      {/* Overlay Nickname Input */}
      {showNicknameInput && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md p-6 bg-white dark:bg-zinc-900 shadow-2xl rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">
              Masukkan Nickname Minecraft
            </h3>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Contoh: FarhanMC"
              className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-zinc-800 dark:text-white"
            />
            <div className="flex gap-4 mb-4 justify-center">
              <label className="flex items-center gap-2 text-foreground">
                <input
                  type="radio"
                  name="platform"
                  value="java"
                  checked={platform === "java"}
                  onChange={() => setPlatform("java")}
                />
                Java
              </label>
              <label className="flex items-center gap-2 text-foreground">
                <input
                  type="radio"
                  name="platform"
                  value="bedrock"
                  checked={platform === "bedrock"}
                  onChange={() => setPlatform("bedrock")}
                />
                Bedrock
              </label>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
              Preview:{" "}
              <span className="font-medium">
                {formattedNickname || "..."}
              </span>
            </p>
            <button
              onClick={handleContinue}
              disabled={!isNicknameValid}
              className={`w-full py-2 rounded-lg text-white font-semibold transition 
                ${
                  isNicknameValid
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Lanjut
            </button>
          </motion.div>
        </div>
      )}
      
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:to-black dark:from-purple-800 transition-all duration-300">
        <Banner />

        <div className="mt-20 px-4">
          <div className="max-w-4xl mx-auto p-5 bg-white dark:bg-zinc-900 shadow-lg rounded-lg transition-all duration-300">
          </div>
        </div>

        {/* Grid Card */}
        <div className="mt-10 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gemPackages.map((pkg) => (
              <GemCard
                key={pkg.id}
                {...pkg}
                nickname={formattedNickname}
                platform={platform}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Gem;
