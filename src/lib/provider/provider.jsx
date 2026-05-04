import BookCartContext from "@/context/BookCartContext";
import { Toast } from "@heroui/react";

const Provider = ({ children }) => {
  return (
    <BookCartContext>
      {children}
      <Toast.Provider />
    </BookCartContext>
  );
};

export default Provider;
