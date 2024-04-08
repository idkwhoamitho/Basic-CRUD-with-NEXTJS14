'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type Product = {
    id: number;
    userId: number;
    tagId: number;
    ProductName: string;
    ProductPrice: string;
}

export default function DeleteProducts({product} : {product: Product}) {
    const [isOpen,setIsOpen]= useState(false)

    const router = useRouter()

    const handleModal = () => 
    {
        setIsOpen(!isOpen)
    }

    const deleteProduct = async (productId: Number) => {
        await axios.delete(`/api/product/${productId}`)

        router.refresh()
        setIsOpen(false)
    }
  
    return (
    <div>
        <button className='btn btn-error btn-sm' onClick={handleModal}>Delete Products</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className='modal-box'>
                <h3 className='font-bold text-lg'>Anda yakin menghapus product {product.ProductName} ?</h3>                
                <div className='modal-action'>
                    <button onClick={handleModal} type='button' className='btn'>No</button>
                    <button type='button' className='btn btn-primary' onClick={() => deleteProduct(product.id)}>Yes</button>
                </div>                
            </div>

        </div>
    </div>
  )
}
