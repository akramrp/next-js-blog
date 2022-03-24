import Link from 'next/link'
export default function Navbar() {
 return (
  <nav>
   <ul>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <li><Link href="/contact"><a>Contact</a></Link></li>
    <li><Link href="/product"><a>Product</a></Link></li>
    <li><Link href="/product/mobile"><a>Product/Mobile</a></Link></li>
    <li><Link href="/product/laptop"><a>Product/Laptop</a></Link></li>
   </ul>
  </nav>
 )
}