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
  const [editNickname, setEditNickname] = useState(false);
  const [tempNickname, setTempNickname] = useState("");

  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname") || "";
    setNickname(savedNickname);
  }, []);

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSend = () => {
    const message = `Nama: ${nama}\nNickname: ${nickname || "Belum diisi"}\nPaket: ${amount} Gems`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "6281234567890"; // Ganti nomor kamu
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  const saveNickname = () => {
    setNickname(tempNickname);
    localStorage.setItem("nickname", tempNickname);
    setEditNickname(false);
  };

  return (
    <>
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
            className="w-40 h-40 object-contain"
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
            className="fixed top-0 left-0 w-full h-full bg-white dark:bg-black bg-opacity-60 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-md text-black space-y-4"
            >
              <h2 className="text-xl font-bold">Lengkapi Pesanan</h2>

              {/* Nama Input */}
                <div>
                <label className="block font-medium mt-4">Nickname:</label>
                {!editNickname ? (
                  <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border rounded">
                    <span>{nickname || "Belum diisi"}</span>
                    <button
                      onClick={() => {
                        setTempNickname(nickname);
                        setEditNickname(true);
                      }}
                      className="text-sm text-blue-600 underline"
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded"
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

              <div>
                <label className="block font-medium">Nama:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Nama kamu"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              {/* Action Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowInput(false)}
                  className="px-4 py-2 border rounded text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-green-600 text-white rounded text-sm"
                >
                 Confirmasi
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
