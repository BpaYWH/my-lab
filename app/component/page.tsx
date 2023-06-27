import Link from 'next/link';

export default function ComponentPage() {

    return (
        <div>
            <Link href="/" className='border rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
                Go back to Home
            </Link>
            <p className="text-2xl">Component</p>
            <ul>
                <li>
                    <Link href="/component/file-explorer">File Explorer</Link>
                </li>
                <li>
                    <Link href="/component/page-preview">Page Preview</Link>
                </li>
            </ul>
        </div>
    )
} 