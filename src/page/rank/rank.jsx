import React, { useState, useEffect } from "react";
import Banner from "../../components/Benner2";
import Footer from "../../components/footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Tier1 from "../../assets/tier1.png";
import Tier2 from "../../assets/tier2.png";
import Tier3 from "../../assets/tier3.png";
import Tier4 from "../../assets/tier4.png";

const Rank = () => {
  const [nickname, setNickname] = useState("");
  const [platform, setPlatform] = useState("java");
  const [showNicknameInput, setShowNicknameInput] = useState(true);
  const [activeTabModal, setActiveTabModal] = useState("skyblock");
  const [activeTabConfirm, setActiveTabConfirm] = useState("skyblock");
  const [modalData, setModalData] = useState(null);
  const [confirmData, setConfirmData] = useState(null);
  const [fullName, setFullName] = useState("");
  const [note, setNote] = useState("");

  const formattedNickname = platform === "bedrock" ? `.${nickname}` : nickname;

  useEffect(() => {
    const savedNick = localStorage.getItem("nickname");
    const savedPlatform = localStorage.getItem("platform");
    if (savedNick && savedPlatform) {
      setNickname(savedNick);
      setPlatform(savedPlatform);
      setShowNicknameInput(false);
    }
  }, []);

  const combinedTierData = [
    {
      tierName: "Tier 1",
      foto: Tier1,
      hargacoret: "Rp50.000",
      price: "Rp40.000",
      skyblock: {
        name: "GOLD",
        features: [
          "Welcome Message GOLD",
          "Extra Chat Color",
          "Emotes in Chat",
          "Daily Chest GOLD",
          "GOLD Rank Kit",
          "/Heal",
          "/Feed",
          "/Ec",
          "/Wb",
          "Auction Limit Up To 8",
          "Full Unlocked Hats",
          "Full Unlocked Particles",
          "Full Unlocked Emotes",
        ],
      },
      survival: {
        name: "VIP",
        features: ["Prefix Chat", "/nick", "Menu Donatur"],
      },
    },
    {
      tierName: "Tier 2",
      foto: Tier2,
      hargacoret: "Rp80.000",
      price: "Rp70.000",
      skyblock: {
        name: "DIAMOND",
        features: [
          "Welcome Message DIAMOND",
          "FLYING ON SPAWN",
          "More Extra Chat Color",
          "Emotes in Chat",
          "Daily Chest",
          "DIAMOND Rank Kit",
          "/Heal",
          "/Feed",
          "/Ec",
          "/Wb",
          "Auction Limit Up To 11",
          "Full Unlocked Hats",
          "Full Unlocked Particles",
          "Full Unlocked Emotes",
          "Full Unlocked Banners",
          "Full Unlocked Gadgets",
        ],
      },
      survival: {
        name: "HERO",
        features: ["Prefix Chat", "/nick", "/hat", "Menu Donatur"],
      },
    },
    {
      tierName: "Tier 3",
      foto: Tier3,
      hargacoret: "Rp100.000",
      price: "Rp90.000",
      skyblock: {
        name: "EMERALD",
        features: [
          "Welcome Message EMERALD",
          "FLYING ON SPAWN",
          "Massive Extra Chat Color",
          "Emotes in Chat",
          "Daily Chest",
          "EMERALD Rank Kit",
          "/Heal",
          "/Feed",
          "/Ec",
          "/Wb",
          "Auction Limit Up To 13",
          "Full Unlocked Hats",
          "Full Unlocked Particles",
          "Full Unlocked Emotes",
          "Full Unlocked Banners",
          "Full Unlocked Gadgets",
          "Full Unlocked Pets",
        ],
      },
      survival: {
        name: "GOD",
        features: [
          "Prefix Chat",
          "/fly",
          "/nick",
          "/hat",
          "/repair",
          "/feed",
          "No TP Timer",
          "Menu Donatur",
        ],
      },
    },
    {
      tierName: "Tier 4",
      foto: Tier4,
      hargacoret: "Rp160.000",
      price: "Rp150.000",
      skyblock: {
        name: "NETHERITE",
        features: [
          "Welcome Message NETHERITE",
          "FLYING ON SPAWN",
          "ULTRAS Extra Chat Color",
          "Emotes in Chat",
          "Daily Chest",
          "NETHERITE Rank Kit",
          "/Heal",
          "/Feed",
          "/Ec",
          "/Wb",
          "Auction Limit Up To 15",
          "Full Unlocked Hats",
          "Full Unlocked Particles",
          "Full Unlocked Emotes",
          "Full Unlocked Banners",
          "Full Unlocked Gadgets",
          "Full Unlocked Pets",
          "Full Unlocked Cloaks",
          "Full Unlocked Suits",
        ],
      },
      survival: {
        name: "TITAN",
        features: [
          "Prefix Chat",
          "/fly",
          "/nick",
          "/hat",
          "/repair",
          "/feed",
          "No TP DELAY",
          "Menu Donatur",
        ],
      },
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black transition-all duration-300">
        <Banner />

        {/* Profile */}
        <div className="mt-20 px-4">
          <div className="max-w-4xl mx-auto p-5 bg-white dark:bg-zinc-900 shadow-lg rounded-lg">
            <div className="relative group text-center">
              <img
                src={`https://mc-heads.net/head/${nickname}/512`}
                alt={`Head of ${nickname}`}
                className="w-22 h-22 mx-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-lg font-medium">{formattedNickname}</p>
              <button
                onClick={() => {
                  localStorage.removeItem("nickname");
                  localStorage.removeItem("platform");
                  setNickname("");
                  setPlatform("java");
                  setShowNicknameInput(true);
                }}
                className="bg-red-500 text-white text-sm px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Rank Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 max-w-6xl mx-auto">
          {combinedTierData.map((tier, index) => (
            <div
              key={index}
              onClick={() => {
                setModalData(tier);
                setActiveTabModal("skyblock");
              }}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition transform duration-300"
            >
              <img
                src={tier.foto}
                alt={`Image of ${tier.tierName}`}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-center text-blue-600 mb-2">
                {tier.tierName}
              </h2>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span className="line-through text-red-500">
                  {tier.hargacoret}
                </span>
              </p>
              <p className="text-center font-semibold text-green-600 dark:text-green-400 text-lg">
                {tier.price}
              </p>
              <div className="">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmData(tier);
                    setModalData(null); // tutup modal fitur jika sedang terbuka
                  }}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Beli Rank
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalData && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg max-w-xl w-full p-6 relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setModalData(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
                >
                  &times;
                </button>

                {/* Tabs */}
                <div className="flex gap-4 mb-4 justify-center">
                  {["skyblock", "survival"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTabModal(tab)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                        activeTabModal === tab
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 dark:bg-zinc-700 text-black dark:text-white"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-center text-blue-500 mb-3">
                    {activeTabModal.toUpperCase()}:{" "}
                    {modalData[activeTabModal].name}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 dark:text-gray-200">
                    {modalData[activeTabModal].features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Modal Konfirmasi Pembelian */}
          {confirmData && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg max-w-xl w-full p-6 relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setConfirmData(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
                >
                  &times;
                </button>

                <h2 className="text-xl font-bold text-center text-blue-600 mb-4">
                  Konfirmasi Pembelian
                </h2>

                <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
                  <p className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700">
                    <strong>Username Minecraft:</strong> {formattedNickname}
                  </p>
                  <p className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700">
                    <strong>Rank:</strong> {confirmData.tierName} (
                    {confirmData.skyblock.name} / {confirmData.survival.name})
                  </p>

                  <label className="block">
                    <span className="font-medium">Nama Lengkap</span>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700"
                      placeholder="Contoh: agus setiawan"
                    />
                  </label>

                  <label className="block">
                    <span className="font-medium">
                      Catatan Tambahan (opsional)
                    </span>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                      className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700"
                      placeholder="Note, opsional"
                    ></textarea>
                  </label>

                  {/* Tabs dan fitur rank */}
                  <div className="flex gap-4 mb-2 justify-center">
                    {["skyblock", "survival"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTabConfirm(tab)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                          activeTabConfirm === tab
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 dark:bg-zinc-700 text-black dark:text-white"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div>
                    <p className="font-medium mb-1">
                      Fitur {activeTabConfirm}:
                    </p>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      {confirmData[activeTabConfirm].features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/6285326972099?text=${encodeURIComponent(
                      `Halo Admin,\nSaya ingin membeli Rank:\n\nNama: ${fullName}\nUsername: ${formattedNickname}\nTier: ${
                        confirmData.tierName
                      } (${confirmData.skyblock.name})\nHarga: ${
                        confirmData.price
                      }\n\nCatatan: ${note || "-"}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block mt-4 text-center ${
                      fullName.trim()
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-400 cursor-not-allowed"
                    } text-white font-semibold py-2 rounded-md transition`}
                    disabled={!fullName.trim()}
                  >
                    Kirim ke WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default Rank;
