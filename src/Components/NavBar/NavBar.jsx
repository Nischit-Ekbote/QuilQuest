'use client'
import Link from "next/link";
import styles from "./navBar.module.css"
import { usePathname } from "next/navigation";
import { useUser } from '@/context/UserContext';

function NavBar() {
    const { isUser, setIsUser ,userName } = useUser();  // This is the correct way to use the hook
    const { query, setQuery } = useUser();
    const path = usePathname();

    return (
        <nav className={styles.component}>
            <div className={styles.linksBlock}>
                 <Link href='/'>QuilQuest</Link>
            </div>
            <div className={`${styles.linksBlock} ${styles.active}`}>
                {isUser &&   <Link href={`/users/${userName}/posts/create`}>Create Post</Link>}

                { !isUser && <Link href='/register'>Register</Link>}
                { isUser ? <>
                    <Link href={`/users/${userName}`}>{userName}</Link>
                    <button onClick={() => setIsUser(false)}>Logout</button>
                </> :
                    <Link href='/login'>Login</Link>
                }
            </div>
        </nav>
    )
}

export default NavBar