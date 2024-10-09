import { FC } from "react";

interface ErrorModalProps {
    message: string; // Mesage Lỗi
    onClose: () => void; // Hàm để đóng modal
}

const ErrorModal: FC<ErrorModalProps> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-semibold mb-4">Error</h2>
                <p className="text-red-600 mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ErrorModal;
