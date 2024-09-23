'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Tạo dữ liệu giả lập cho sản phẩm
const generateProducts = (total: number) => {
  return Array(total).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 20,
    image: '/placeholder.svg?height=200&width=200',
  }))
}

// Component hiển thị danh sách sản phẩm
export default function ProductList() {
  const productsPerPage = 12 // Số lượng sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState([])
  const [sideProducts, setSideProducts] = useState([]) // Sản phẩm dọc bên trái

  useEffect(() => {
    // Giả lập tạo 30 sản phẩm cho danh sách chính
    setProducts(generateProducts(30))
    
    // Giả lập tạo 4 sản phẩm cho danh sách dọc bên trái
    setSideProducts(generateProducts(4))
  }, [])

  // Tính toán sản phẩm trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // Thay đổi trang
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const totalPages = Math.ceil(products.length / productsPerPage)

  return (
<div className="container mx-auto px-20 py-8">
  <h2 className="text-2xl font-bold mb-6 text-center">Product List</h2>
  
  {/* Layout chia 2 khung với tỷ lệ 7:3 */}
  <div className="flex justify-center gap-4">
    {/* Khung bên trái (chiếm 30%, ẩn trên màn hình nhỏ hơn 1024px) */}
    <div className="hidden lg:block w-3/10 max-w-[30%] p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Top Picks</h3>
      <div className="space-y-4">
        {sideProducts.map((product, index) => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-row items-center">
            {/* Nếu index là 0, 1, 2, hoặc 3 thì hiển thị biểu tượng Best Seller */}
            {index < 4 && (
              <div className="absolute top-0 right-0 p-2">
                <Image
                  src="/best-seller.svg"
                  alt="Best Seller"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="w-32 h-32 object-cover"
            />
            <div className="p-3 flex-grow">
              <h3 className="font-semibold text-md mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-3 text-sm">${product.price.toFixed(2)}</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Khung bên phải (chiếm 70%) */}
    <div className="w-full lg:w-7/10 p-4 bg-gray-100 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 flex-grow">
              <h3 className="font-semibold text-md mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-3 text-sm">${product.price.toFixed(2)}</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>            
        ))}
      </div>

      {/* Phân trang */}
      <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
    </div>
  </div>
</div>
  )
}

// Component phân trang
function Pagination({ totalPages, currentPage, paginate }: { totalPages: number, currentPage: number, paginate: (pageNumber: number) => void }) {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex justify-center mt-8">
      <ul className="inline-flex items-center -space-x-px">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight border bg-white hover:bg-blue-200 ${currentPage === number ? 'bg-blue-500 text-white' : 'text-blue-500'} border-blue-300`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
