import React, { useState, useEffect } from "react";
import { rankData } from "./tierData";
import Banner from "../../components/Benner2";
import Footer from "../../components/footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Rank = () => {
  const [nickname, setNickname] = useState("");
  const [platform, setPlatform] = useState("java");
  const [showNicknameInput, setShowNicknameInput] = useState(true);

  const formattedNickname = platform === "bedrock" ? `.${nickname}` : nickname;
  const [selectedGame, setSelectedGame] = useState("skyblock");
  const gameOptions = ["skyblock", "survival"];
  const tiers = rankData[selectedGame];

  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const savedNick = localStorage.getItem("nickname");
    const savedPlatform = localStorage.getItem("platform");
    if (savedNick && savedPlatform) {
      setNickname(savedNick);
      setPlatform(savedPlatform);
      setShowNicknameInput(false);
    }
  }, []);

  const openModal = (tier) => {
    setModalData(tier);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:to-black dark:from-purple-800 transition-all duration-300">
        <Banner />

        {/* Profile */}
        <div className="mt-20 px-4">
          <div className="max-w-4xl mx-auto p-5 bg-white dark:bg-zinc-900 shadow-lg rounded-lg transition-all duration-300">
            <div className="relative group text-center">
              <img
                src={`https://mc-heads.net/head/${nickname}/512`}
                alt={`Head of ${nickname}`}
                className="w-22 h-22 mx-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-lg text-foreground font-medium">
                {formattedNickname}
              </p>
              <button
                onClick={() => {
                  localStorage.removeItem("nickname");
                  localStorage.removeItem("platform");
                  setNickname("");
                  setPlatform("java");
                  setShowNicknameInput(true);
                }}
                className="text-center bg-red-500 text-white text-sm px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Pilih Game */}
        <div className="text-center text-2xl font-bold mt-10">
          <h1>Pilih Rankmu</h1>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          {gameOptions.map((game) => (
            <button
              key={game}
              onClick={() => setSelectedGame(game)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedGame === game
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {game.charAt(0).toUpperCase() + game.slice(1)}
            </button>
          ))}
        </div>

        {/* Rank Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 mt-8 px-4 max-w-7xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-md transition-all flex flex-col items-center"
            >
              <img
                src={tier.image || "/default-rank.png"}
                alt={tier.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-blue-500 text-center">
                {tier.name}
              </h3>

              {tier.price && (
                <p className="text-lg font-semibold text-green-500 mt-2">
                  Rp {tier.price.toLocaleString("id-ID")}
                </p>
              )}

              <button
                onClick={() => openModal(tier)}
                className="mt-4 text-sm text-blue-600 hover:underline"
              >
                Lihat Fitur
              </button>

              <a
                href={`https://wa.me/628xxxxxx?text=Halo, saya ingin membeli rank ${tier.name} untuk ${formattedNickname}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-300 w-full text-center mt-6"
              >
                Beli Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Modal Fitur */}
        <AnimatePresence>
          {modalData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 w-full max-w-md shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-zinc-500 hover:text-red-500"
                >
                  ✖
                </button>
                <h2 className="text-xl font-bold mb-4 text-blue-600">
                  {modalData.tier} — {modalData.name}
                </h2>
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 p-5">
                  Fitur Unggulan
                </h1>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {modalData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rank;
