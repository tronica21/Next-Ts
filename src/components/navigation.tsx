import Link from 'next/link'

export default function Navigation() {
  return (
    <div className='container mt-0 flex justify-between px-4 py-4'>
      <div className='flex gap-2'>
        <Link href='/'>Home</Link>
        <Link href='/'>Dashboard</Link>
        <Link href='/'>Settings</Link>
      </div>
      <Link href='/'>Login</Link>
    </div>
  )
}
