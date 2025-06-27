import React, { useState, useEffect } from "react";
import { rankData } from "./tierData";
import Banner from "../../components/Benner2";
import Footer from "../../components/footer/Footer";

const Rank = () => {
  const [nickname, setNickname] = useState("");
  const [platform, setPlatform] = useState("java");
  const [showNicknameInput, setShowNicknameInput] = useState(true);

  const isNicknameValid = nickname.trim() !== "";
  const formattedNickname = platform === "bedrock" ? `.${nickname}` : nickname;

  const [selectedGame, setSelectedGame] = useState("skyblock");
  const gameOptions = ["skyblock", "survival"];
  const tiers = rankData[selectedGame];

  useEffect(() => {
    const savedNick = localStorage.getItem("nickname");
    const savedPlatform = localStorage.getItem("platform");

    if (savedNick && savedPlatform) {
      setNickname(savedNick);
      setPlatform(savedPlatform);
      setShowNicknameInput(false);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:to-black dark:from-purple-800 transition-all duration-300">
        <Banner />

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

        {/* Filter */}
        <div className="flex justify-center gap-4 mt-10">
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

        {/* Tiers */}
        <div className="mt-6 space-y-6 px-4 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div key={i} className="bg-white dark:bg-zinc-800 rounded-xl p-5 shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2 text-blue-500">
                {tier.tier} — {tier.name}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rank;
