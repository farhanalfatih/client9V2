import Gambar from '../../assets/logo3.png';
import Gambar2 from '../../assets/logo1.png';
import Gambar3 from '../../assets/logo2.png';
import Gambar4 from '../../assets/chestgemV1.png';



export const gemPackages = [
  {
    id: 1,
    amount: 50,
    price: 6425,
    image: Gambar3,
    type: 'original', // harga asli
  },
  {
    id: 2,
    amount: 300,
    price: 38550,
    image: Gambar3,
    type: 'origin', // harga asli
  },
  {
    id: 3,
    amount: 500,
    price: 50000,
    oldPrice: 64250,
    discount: "~22%",
    image: Gambar2,
  },
  {
    id: 4,
    amount: 1000,
    price: 100000,
    oldPrice: 128500,
    discount: "~22%",
    image: Gambar4,
  },
  {
    id: 5,
    amount: 2000,
    price: 180000,
    oldPrice: 257000,
    discount: "~30%",
    bestValue: true,
    image: Gambar,
  },
];
