import Link from "next/link";
import { useRouter } from 'next/router';

export default function Page() {
    return(
        <div>
            <h1>カテゴリー一覧</h1>
            <ul>
                <li>
                    <Link href="/categories/flower">花</Link>
                </li>
                <li>
                    <Link href="/categories/animal">動物</Link>
                </li>
                <li>
                    <Link href="/categories/landscape">風景</Link>
                </li>
            </ul>
        </div>
    );
}