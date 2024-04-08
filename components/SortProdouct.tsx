'use client'
import React, { SyntheticEvent, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'

export const SortProdouct = () => {
    const route = useRouter()
    const [sortType,setSortType] = useState("1")

    const onSelect = async (e :SyntheticEvent) => 
    {
        e.preventDefault()                 
        route.replace(`/dashboard/${sortType}`)
        route.refresh()
    }
     return (
    <div className='flex items-center static mx-auto'>
       <form onSubmit={onSelect}>
            <select className='select select-bordered mr-2' 
            value={sortType}
            onChange={(e) => {setSortType(e.target.value)}}>
                <option value='' disabled>Sort By</option>
                <option value={'1'} key={'1'}>All</option>
                <option value={'2'} key={'2'}>A-Z</option>
                <option value={'3'} key={'3'}>Product</option>
            </select>
            <div className='inline-block'>
                <button className='btn btn-primary' type='submit'>Apply Sort</button>
            </div>
       </form>
    </div>
  )
}
