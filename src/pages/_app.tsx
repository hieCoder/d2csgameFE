// src/pages/_app.tsx

import "@/globals.css"
import type { AppProps } from "next/app"; // Import kiểu dữ liệu cho AppProps
import { Provider } from "react-redux"; // Import Provider từ react-redux
import { store } from "../store/store"; // Import Redux store

/**
 * Component MyApp là component gốc của toàn bộ ứng dụng Next.js.
 * Bọc ứng dụng bằng Provider để kết nối với Redux store.
 */
function MyApp({ Component, pageProps }: AppProps) {
    return (
        // Provider cung cấp Redux store cho toàn bộ ứng dụng
        <Provider store={store}>
            {/* Component cụ thể của từng trang */}
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp; // Export component để Next.js sử dụng
