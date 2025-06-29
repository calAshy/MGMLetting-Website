import React from "react";
import '../styles/index.css'

// function Header() {
//     return (
//         <div className="flex space-apart bg-white w-full h-8">
//             <div>
//                 <p className="text-black">Image Placeholder</p>
//             </div>
//             <div>
//                 <div>
//                     <p className="text-black">Button</p>
//                     <p className="text-black">Button</p>
//                     <p className="text-black">Button</p>
//                     <p className="text-black">Button</p>
//                     <p className="text-black">Button</p>
//                     <p className="text-black">AccentButton</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header;

const headerItems = [
    {label: 'title', path: '/'},
    {label: 'title', path: '/'},
    {label: 'title', path: '/'},
    {label: 'title', path: '/'},
    {label: 'title', path: '/'},
]

export default function Header() {
    return(
        <header>
            <nav>
                <ul>
                    {
                        headerItems.map((item) => {
                            return(
                                <Link href={item.path} key={item.label}>
                                    <li>{item.label}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}