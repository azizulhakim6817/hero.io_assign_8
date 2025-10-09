import { toast } from "react-toastify";
const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("appsData");
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storeBookData = getStoredBook();

  if (storeBookData.includes(id)) {
    toast.error("Book is already read exists!");
  } else {
    storeBookData.push(id);
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("appsData", data);
    toast.success("Book read successfull");
  }
};

export { addToStoredDB, getStoredBook };
