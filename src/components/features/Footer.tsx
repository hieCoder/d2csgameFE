'use client'

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 text-center text-gray-600">
      <div className="container mx-auto px-4">
        <p className="mb-4">Copyright 2023 Your Company Name</p>
        <ul className="flex justify-center mb-4">
          <li className="mr-6">
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              Terms of Use
            </Link>
          </li>
          <li className="mr-6">
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;