import { memo, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from '../components/UI/Button';
import axios from 'axios';
import { toast } from 'react-toastify';

const Buynow = () => {
  const [fname, setfname] = useState("");
  const [sname, setsname] = useState("");
  const [address, setaddress] = useState("");
  const [nearestplace, setnearestplace] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [contact, setcontactnumber] = useState("");

  const handleSubmit = () => {
    const formdata = new FormData();
    formdata.append("fname", fname);
    formdata.append("sname", sname);
    formdata.append("address", address);
    formdata.append("nearestplace", nearestplace);
    formdata.append("postalcode", postalcode);
    formdata.append("contact", contact);

    axios.post("http://localhost:3000/api/books/order", formdata, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(() => toast.success("Your Order has been placed. You will receive your order in next three working days"))
      .catch((error) => {
        console.error(error.message);
        toast.error("Something went wrong, please try again.");
      });
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-12 gap-10">
        <div className="md:w-1/2">
          <h1 className="text-7xl font-bold mb-4">Place Your Order</h1>
          <p className="text-lg text-gray-700 mb-6 ">
            Take your favourite book to your doorstep
          </p>
        </div>

        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md w-full flex flex-col gap-4">
          <FaSearch />
          <input
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            type="text"
            placeholder="Enter your first name "
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            value={sname}
            onChange={(e) => setsname(e.target.value)}
            type="text"
            placeholder="Last name"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            placeholder="Enter your address"
            rows="3"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            value={contact}
            onChange={(e) => setcontactnumber(e.target.value)}
            type="number"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            value={nearestplace}
            onChange={(e) => setnearestplace(e.target.value)}
            type="text"
            placeholder="Nearest place"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            value={postalcode}
            onChange={(e) => setpostalcode(e.target.value)}
            type="text"
            placeholder="Postal code"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <Button onClick={handleSubmit}>Place Your Order</Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Buynow);
