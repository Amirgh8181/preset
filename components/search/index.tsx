"use client"
import { AiOutlineSearch } from 'react-icons/ai'
import { FormEvent, useState } from 'react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [search, setSearch] = useState<string>()
    const router=useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('')
        router.push(`/${search}/`)
    }
    return (
        <div className='flex flex-row space-x-2'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    className='p-2 caret-blue-500 text-lg rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                    placeholder='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='p-3 border border-transparent bg-slate-500 rounded-lg hover:border hover:border-slate-700 active:bg-slate-800 transition-colors duration-300'>
                    <AiOutlineSearch />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;