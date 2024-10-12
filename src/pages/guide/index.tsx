import Image from "next/image"
import Header from "@/components/features/Header"
import Footer from "@/components/features/Footer"
import FooterIcon from "@/components/features/FooterIcon"

interface Product {
  id: number
  name: string
  image: string
  price: number
  date: String
  description: string
}

const products: Product[] = [
  { id: 1, name: "Ergonomic Chair", image: "/placeholder.svg?height=100&width=100&text=Chair", price: 199.99,date: "2024-5-25", description: "Comfortable ergonomic chair for long working hours." },
  { id: 2, name: "Standing Desk", image: "/placeholder.svg?height=100&width=100&text=Desk", price: 299.99, date: "2024-5-25", description: "Adjustable standing desk for a healthier work environment." },
  { id: 3, name: "Wireless Keyboard", image: "/placeholder.svg?height=100&width=100&text=Keyboard", price: 79.99, date: "2024-5-25", description: "Sleek wireless keyboard with long battery life." },
  { id: 4, name: "Wireless Mouse", image: "/placeholder.svg?height=100&width=100&text=Mouse", price: 49.99, date: "2024-5-25", description: "Ergonomic wireless mouse for precision control." },
  { id: 5, name: "Monitor Stand", image: "/placeholder.svg?height=100&width=100&text=Stand", price: 39.99, date: "2024-5-2", description: "Adjustable monitor stand for better posture and comfort." },
  { id: 6, name: "Desk Lamp", image: "/placeholder.svg?height=100&width=100&text=Lamp", price: 29.99, date: "2024-5-25", description: "LED desk lamp with adjustable brightness and color temperature." },
  { id: 7, name: "Desk Lamp", image: "/placeholder.svg?height=100&width=100&text=Lamp", price: 29.99, date: "2024-5-25", description: "LED desk lamp with adjustable brightness and color temperature." },
  { id: 8, name: "Desk Lamp", image: "/placeholder.svg?height=100&width=100&text=Lamp", price: 29.99, date: "2024-5-25", description: "LED desk lamp with adjustable brightness and color temperature." },
  { id: 9, name: "Desk Lamp", image: "/placeholder.svg?height=100&width=100&text=Lamp", price: 29.99, date: "2024-5-25", description: "LED desk lamp with adjustable brightness and color temperature." },
  { id: 10, name: "Desk Lamp", image: "/placeholder.svg?height=100&width=100&text=Lamp", price: 29.99, date: "2024-5-25", description: "LED desk lamp with adjustable brightness and color temperature." },
  { id: 11, name: "Desk Lamp", image: "/placeholder.svg?height=100&width=100&text=Lamp", price: 29.99, date: "2024-5-25", description: "LED desk lamp with adjustable brightness and color temperature." },
]

export default function ProductLayout() {
  const featuredProduct = products[0]

  return (<div className="bg-[#e8e8e8] mt-12">
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Right Column (now on the left): List of 4 Products */}
        <div className="md:w-4/5 order-2 md:order-1 bg-white p-4 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg group cursor-pointer">
                <div className="aspect-square relative mb-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold mt-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 text-right">
                  {product.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Left Column (now on the right): Featured Product and List of Product Images, Names, and Dates */}
        <div className="md:w-1/5 space-y-4 order-1 md:order-2">
          {/* Featured Product */}
          <div className="bg-white p-4 rounded-md">
            <div className="border p-4 rounded-lg group cursor-pointer">
              <div className="aspect-square relative mb-2">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold mt-2 group-hover:text-blue-600 transition-colors duration-300">
                {featuredProduct.name}
              </h3>
              <p className="text-sm text-gray-500 text-right">
              {featuredProduct.date}
              </p>
            </div>
          </div>

          {/* Product List */}
          <div className="space-y-4 bg-white p-4 rounded-md">
            <h2 className="text-md font-bold mb-4">Bài viết gần đây</h2>
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center space-x-4 group cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Ngày đăng: {product.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <FooterIcon/>
    <Footer/>
    </div>
  )
}