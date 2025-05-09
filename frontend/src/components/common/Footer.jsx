import { Link } from 'react-router-dom';
import { TbBrandMeta, TbBrandInstagram, TbBrandTwitter } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 lg:px-0">
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
                    <p className="text-gray-500 mb-4">
                        Be the first to know about our latest products, exclusive offers, and more.
                    </p>
                    <p className="text-sm font-medium mb-6 text-gray-700">
                        Sign up and get 10% off your first order.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 text-sm border rounded-l-full focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 text-sm text-white bg-black rounded-r-full hover:bg-gray-900 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li>
                            <Link to="#" className="hover:text-gray-900 transition-colors">Men's top wear</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-900">Women's top wear</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-900 transition-colors">Kids's top wear</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li>
                            <Link to="#" className="hover:text-gray-900 transition-colors">Contact us</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-900">About us</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-900 transition-colors">FAQ's</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg text-gray-800 mb-4">Follow us</h3>
                    <div className='flex items-center space-x-4 mb-6'>
                        <a href="https://www.facebook.com"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-500 hover:text-gray-900 transition-colors'
                        >
                            <TbBrandMeta className='h-5 w-5' />
                        </a>
                        <a href="https://www.instagram.com"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-500 hover:text-gray-900 transition-colors'
                        >
                            <TbBrandInstagram className='h-5 w-5' />
                        </a>
                        <a href="https://www.twitter.com"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-500 hover:text-gray-900 transition-colors'
                        >
                            <TbBrandTwitter className='h-5 w-5' />
                        </a>
                    </div>
                    <p className='text-gray-500 mb-2'>Call us: </p>
                    <p><FiPhoneCall className='inline-block mr-2' />+9234567890</p>
                    <p className='text-gray-500'>Email us: </p>
                    <p><FiMail className='inline-block mr-2' />info@example.com</p>
                </div>
            </div>
            <div className='container mx-auto px-4 border-t border-gray-200 pt-6 mt-12 lg:px-4 lg:px-0'>
                <p className='text-center text-gray-500 text-sm tracking-tighter '>
                    &copy; 2025 Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer;