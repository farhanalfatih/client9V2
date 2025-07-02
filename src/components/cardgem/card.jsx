import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formatRupiah = (number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);

const GemCard = ({ amount, price, oldPrice, bestValue, image }) => {
  const [showInput, setShowInput] = useState(false);
  const [nama, setNama] = useState("");
  const [nickname, setNickname] = useState("");
  const [platform, setPlatform] = useState("java");
  const [editNickname, setEditNickname] = useState(false);
  const [tempNickname, setTempNickname] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname") || "";
    const savedPlatform = localStorage.getItem("platform") || "java";
    setNickname(savedNickname);
    setPlatform(savedPlatform);
  }, []);

  const formattedNick = platform === "bedrock" ? `.${nickname}` : nickname;

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSend = () => {
    if (!nama.trim() || !nickname.trim()) return;

    const message = `Halo Admin,%0A%0ASaya ingin membeli Gem:%0A%0A` +
      `👤 *Nama:* ${nama}%0A` +
      `🎮 *Nickname:* ${formattedNick}%0A` +
      `📱 *Platform:* ${platform.toUpperCase()}%0A` +
      `💎 *Paket:* ${amount} Gems%0A` +
      `💰 *Harga:* ${formatRupiah(price)}%0A` +
      `📝 *Catatan:* ${note || "-"}`;

    const whatsappNumber = "6285326972099"; // Ganti sesuai kebutuhan
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const saveNickname = () => {
    setNickname(tempNickname);
    localStorage.setItem("nickname", tempNickname);
    setEditNickname(false);
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={handleClick}
        className={`relative p-4 rounded-xl border shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02]
          ${bestValue
            ? "border-yellow-400 bg-yellow-100 text-black"
            : "border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white"
          }
        `}
      >
        {bestValue && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            BEST VALUE!
          </div>
        )}
        <div className="flex flex-col items-center gap-3">
          <img
            src={image}
            alt={`${amount} gems`}
            className="w-32 h-32 object-contain"
          />
          <p className="font-bold text-lg">{amount} GEMS</p>
          <div className="text-center">
            {oldPrice && oldPrice !== price ? (
              <>
                <p className="line-through text-sm opacity-60">
                  {formatRupiah(oldPrice)}
                </p>
                <p className="text-xl font-bold">{formatRupiah(price)}</p>
              </>
            ) : (
              <p className="text-xl font-bold">{formatRupiah(price)}</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-lg w-11/12 max-w-md text-black dark:text-white space-y-4 relative"
            >
              <button
                className="absolute top-2 right-4 text-lg text-gray-500 hover:text-red-500"
                onClick={() => setShowInput(false)}
              >
                &times;
              </button>

              <h2 className="text-xl font-bold mb-2">Konfirmasi Pembelian</h2>

              {/* Nickname */}
              <div>
                <label className="block font-medium">Nickname:</label>
                {!editNickname ? (
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-zinc-800 px-4 py-2 border rounded">
                    <span>{formattedNick || "Belum diisi"}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded dark:bg-zinc-800"
                      value={tempNickname}
                      onChange={(e) => setTempNickname(e.target.value)}
                      placeholder="Masukkan nickname baru"
                    />
                    <button
                      onClick={saveNickname}
                      className="text-sm bg-blue-600 text-white px-3 py-2 rounded"
                    >
                      Simpan
                    </button>
                  </div>
                )}
              </div>

              {/* Nama */}
              <div>
                <label className="block font-medium">Nama Lengkap:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded dark:bg-zinc-800"
                  placeholder="Nama kamu"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>

              {/* Catatan */}
              <div>
                <label className="block font-medium">Catatan (opsional):</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border rounded dark:bg-zinc-800"
                  placeholder="Contoh: kirim sebelum jam 8 malam"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowInput(false)}
                  className="px-4 py-2 border rounded text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={handleSend}
                  disabled={!nama.trim() || !nickname.trim()}
                  className={`px-4 py-2 text-sm rounded text-white transition ${
                    nama.trim() && nickname.trim()
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Konfirmasi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GemCard;
