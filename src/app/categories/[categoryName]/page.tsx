'use client';

import { useRouter } from 'next/navigation';

type Props = {
    params: { categoryName: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params, searchParams }: Props) {
    const page = typeof searchParams.page === "string" ? searchParams.page : "1";

    const router = useRouter();

    return (
        <div>
            <h1>カテゴリー一覧</h1>
            <h2>カテゴリー「{params.categoryName}」</h2>
            <p>ページ番号：「{page}」</p>
            <button
                onClick={() => {
                    router.push("/categories");
                }}
            >
                カテゴリー一覧へ戻る
            </button>
        </div>
    );
}
