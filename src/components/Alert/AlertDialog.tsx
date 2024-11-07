import { useAlertStore } from "../../store/useAlertStore";
import Alert from "./Alert";

const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, message, closeAlert } = useAlertStore();

  return (
    <>
      {children}
      {isOpen && <Alert message={message} onClose={closeAlert} />}
    </>
  );
};

export default AlertDialog;
