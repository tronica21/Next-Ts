import Pagination from '@/components/pagination'
import Search from '@/components/search'
import Link from 'next/link'

// Define the User type
type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

// Function to fetch users
async function getUser(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const users: User[] = await response.json()
    return users
  } catch (error) {
    console.error('Error fetching users:', error)
    return []
  }
}

// Component to render users in a table
async function Dashboard(): Promise<JSX.Element> {
  const users = await getUser()

  return (
    <section>
      <div className='my-4 text-2xl font-semibold'>User</div>
      <Search />
      <table className='w-full table-auto border-collapse border border-slate-400 text-sm text-slate-800'>
        <thead>
          <tr className='bg-slate-200'>
            <th className='border border-slate-400'>No</th>
            <th className='border border-slate-400'>Name</th>
            <th className='border border-slate-400'>Email</th>
            <th className='border border-slate-400'>Role</th>
            <th className='border border-slate-400'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-slate-50'>
          {users.map((user, index) => (
            <tr key={user.id} className='cursor-pointer'>
              <td className='border border-slate-400 px-1'>{index + 1}</td>
              <td className='border border-slate-400 px-1 hover:bg-indigo-200'>
                <Link href={`/user/${user.id}`}>{user.name}</Link>
              </td>
              <td className='border border-slate-400 px-1'>{user.email}</td>
              <td className='border border-slate-400 px-1'>
                {user.company.name}
              </td>
              <td className='border border-slate-400 px-1'>...</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={1} totalPage={10} />
    </section>
  )
}

export default Dashboard
