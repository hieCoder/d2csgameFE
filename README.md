This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure
my-ecommerce-app/
├── public/                     # Tệp tĩnh như hình ảnh, favicon
│   ├── images/                 # Thư mục chứa hình ảnh sản phẩm (game)
│   └── favicon.ico             # Favicon cho trang web
│
├── src/                        # Mã nguồn của ứng dụng
│   ├── components/             # Các component dùng chung
│   │   ├── Cart.tsx            # Component giỏ hàng
│   │   ├── Header.tsx          # Thanh điều hướng chính, logo
│   │   ├── Footer.tsx          # Chân trang
│   │   └── ProductCard.tsx     # Thẻ hiển thị sản phẩm
│   │
│   ├── config/                 # Cấu hình cho dự án
│   │   └── api.ts              # Cấu hình gọi API (Axios, Fetch)
│   │
│   ├── hooks/                  # Các custom hooks dùng chung
│   │   └── useAuth.ts          # Hook kiểm tra trạng thái người dùng
│   │
│   ├── layouts/                # Các layout dùng chung
│   │   └── MainLayout.tsx      # Layout chính cho các trang
│   │
│   ├── lib/                    # Thư mục chứa các tiện ích ShadCN UI
│   │   └── utils.ts            # Hàm `cn` giúp kết hợp class Tailwind
│   │
│   ├── pages/                  # Các trang của ứng dụng
│   │   ├── api/                # API routes (Next.js API)
│   │   ├── _app.tsx            # Entry point của Next.js
│   │   ├── index.tsx           # Trang chủ
│   │   ├── cart.tsx            # Trang giỏ hàng
│   │   └── product/            # Các trang liên quan đến sản phẩm
│   │       └── [id].tsx        # Trang chi tiết sản phẩm (theo id)
│   │
│   ├── store/                  # Redux store và các slice
│   │   ├── store.ts            # Khởi tạo Redux store
│   │   ├── cartSlice.ts        # Slice quản lý giỏ hàng
│   │   ├── productSlice.ts     # Slice quản lý sản phẩm
│   │   └── userSlice.ts        # Slice quản lý người dùng
│   │
│   ├── styles/                 # Tailwind CSS và các stylesheet khác
│   │   ├── globals.css         # CSS toàn cục (đã có sẵn)
│   │   └── tailwind.config.ts  # Cấu hình Tailwind CSS (đã có sẵn)
│   │
│   ├── types/                  # Định nghĩa các kiểu dữ liệu dùng chung
│   │   ├── product.ts          # Định nghĩa kiểu dữ liệu sản phẩm
│   │   ├── cart.ts             # Định nghĩa kiểu dữ liệu giỏ hàng
│   │   └── user.ts             # Định nghĩa kiểu dữ liệu người dùng
│   │
│   ├── utils/                  # Các hàm tiện ích chung
│   │   ├── formatCurrency.ts   # Định dạng tiền tệ
│   │   └── validation.ts       # Hàm validate dữ liệu
│   │
│   └── middleware/             # Các middleware dùng trong Next.js API routes
│       └── authMiddleware.ts   # Middleware xác thực người dùng
│
├── .gitignore                  # Các tệp/thư mục không theo dõi bởi Git
├── tsconfig.json               # Cấu hình TypeScript
├── package.json                # Các phụ thuộc của dự án
├── tailwind.config.ts          # Cấu hình Tailwind (đã có sẵn)
├── next.config.js              # Cấu hình cho Next.js
└── README.md                   # Thông tin hướng dẫn dự án
