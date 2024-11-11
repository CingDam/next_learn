// 프레임워크한테 여긴 클라이언트에 코드를 하이드레이션할거다라고 할 때 사용
// 자식 컴포넌트들은 다 client컴포넌트임
// use client를 사용시 코드는 노출됨
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === '/' ? '🚕':'' }
                </li>
                <li>
                    <Link href="/about-us">AboutUs</Link> {path === '/about-us' ? '🚕':'' }
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;