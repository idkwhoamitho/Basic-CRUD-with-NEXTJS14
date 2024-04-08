'use client'
import React, { useState,SyntheticEvent } from 'react'
import { useRouter } from 'next/navigation'
import { productTag } from '@prisma/client'
import axios from 'axios'

export default function AddProduct({tags} : {tags: productTag[]}) {
    const [isOpen,setIsOpen]= useState(false)
    const [productName, setProductName] = useState("")
    const [productPrice,setProductPrice] = useState("")
    const [productTag,setProductTag] = useState("")

    const router = useRouter()

    const handleModal = () => 
    {
        setIsOpen(!isOpen)
    }

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        console.log("id: "+  productTag)
        await axios.post('/api/product',{
            productName: productName,
            productPrice: productPrice,
            productTag: productTag,
            userId: 1
        })
        setProductName("")
        setProductPrice("")
        setProductTag("")
        router.refresh()
        setIsOpen(false)
    }
  
    return (
    <div>
        <button className='btn' onClick={handleModal}>Add Product</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className='modal-box'>
                <h3 className='font-bold text-lg'>Add New Product</h3>
                <form onSubmit={onSubmit}>
                    <div className='form-control w-full'>
                        <label className='label font-bold'>Product Name</label>
                        <input 
                        type="text" 
                        className='input input-bordered'
                        placeholder='Product Name'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label font-bold'>Product Price</label>
                        <input 
                        type="text" 
                        className='input input-bordered'
                        placeholder='Product Price'
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label font-bold'>Product Tag</label>
                        <select className='select select-bordered'
                        value={productTag}
                        onChange={(e) => setProductTag(e.target.value)}
                        >
                            <option value="" disabled>Select Tag</option>
                            
                            {tags.map((tag) => {
                                return(
                                    <option 
                                    value={tag.id}  
                                    key={tag.id}
                                    
                                    >
                                        {tag.productTagName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='modal-action'>
                        <button type='button' className='btn' onClick={handleModal}>close</button>
                        <button type='submit' className='btn btn-primary' onClick={onSubmit}>Save</button>
                    </div>
                </form>

            </div>

        </div>
    </div>
  )
}
