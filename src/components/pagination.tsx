import Link from 'next/link'

export default function Pagination({
  page,
  totalPage
}: {
  page: number
  totalPage: number
}) {
  return (
    <>
      <div></div>
      <div className='mt-2 flex justify-between gap-1 text-sm text-slate-800'>
        <select
          name='perPage'
          id='perPage'
          className='border-1 rounded-lg border border-slate-400 p-1 px-2 text-slate-700'
        >
          <option value='10'>10 data / page</option>
          <option value='30'>30 data / page</option>
          <option value='50'>50 data / page</option>
        </select>
        <div className='flex'>
          <Link
            href='/'
            className='border-1 rounded-l-md border border-slate-400 p-1 px-2'
          >
            Prev
          </Link>
          {page !== 1 ? (
            <Link
              href='/'
              className='border-1 border border-slate-400 p-1 px-2'
            >
              ...
            </Link>
          ) : null}
          <Link
            href={`/users?page=${page}`}
            className={`border-1 border border-slate-400 bg-indigo-500 p-1 px-2`}
          >
            {page}
          </Link>
          <Link
            href={`/users?page=${page + 1}`}
            className='border-1 border border-slate-400 p-1 px-2'
          >
            {page + 1}
          </Link>
          <Link
            href={`/users?page=${page + 2}`}
            className='border-1 border border-slate-400 p-1 px-2'
          >
            {page + 2}
          </Link>

          {totalPage !== 1 ? (
            <Link
              href='/'
              className='border-1 border border-slate-400 p-1 px-2'
            >
              ...
            </Link>
          ) : null}
          <div className='rounded-r-md border border-slate-400 p-1 px-2'>
            Next
          </div>
        </div>
      </div>
    </>
  )
}
