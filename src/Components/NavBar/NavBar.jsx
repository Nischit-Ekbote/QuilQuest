'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./navBar.module.css"
import { usePathname } from "next/navigation";
import { useUser } from '@/context/UserContext';  // Make sure this path is correct

function NavBar() {
    const { isUser, setIsUser } = useUser();  // This is the correct way to use the hook
    const path = usePathname();

    return (
        <nav className={styles.component}>
            <div className={styles.linksBlock}>
                 <Link href='/'>QuilQuest</Link>
            </div>
            <div className={`${styles.linksBlock} ${styles.active}`}>
                {isUser && path !=="/posts/create" &&  <Link href='/posts/create'>Create Post</Link>}
                { !isUser && <Link href='/register'>Register</Link>}
                { isUser ? 
                    <button onClick={() => setIsUser(false)}>Logout</button> : 
                    <Link href='/login'>Login</Link>
                }
            </div>
        </nav>
    )
}

export default NavBar