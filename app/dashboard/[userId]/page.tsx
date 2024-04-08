
import React from 'react'
import AddProduct from '../../../components/AddProduct'
import { PrismaClient } from '@prisma/client'
import {SortProdouct} from '../../../components/SortProdouct'
import ListProducts from '../../../components/ListProducts'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

const prisma  = new PrismaClient()

const getProduct = async (params: Number) => 
{
    let res;
    switch(params){
        case 1:
            res = await prisma.product.findMany({
                select:{
                    id: true,
                    userId: true,
                    ProductName: true,
                    ProductPrice:true,
                    tag:true,
                    tagId:true,
                }
            })
            return res
        case 2:
            res = await prisma.product.findMany({
                orderBy:[{
                    ProductName:'desc'
                }],
                select:{
                    id: true,
                    userId: true,
                    ProductName: true,
                    ProductPrice:true,
                    tag:true,
                    tagId:true,
                }
            })
            return res


        
        default:
            res = await prisma.product.findMany({
                select:{
                    id: true,
                    userId: true,
                    ProductName: true,
                    ProductPrice:true,
                    tag:true,
                    tagId:true,
                }
            })
            return res
    }
} 

const getTags = async () => 
{
    const res = await prisma.productTag.findMany({
        select:{
            id: true,
            productTagName: true 
        }
    })
    return res 
}




export default async function Dashboard({ params  }: {params: any}) {  
    let [products, tags] = await Promise.all([
        getProduct(Number(params)),
        getTags(),
    ])
    console.log(params)
    
    
    return (
       <div className=''>
            <div className='mb-2 container container-md'>
                <AddProduct tags={tags}/>        
               <div className='absolute inset-y-10  inset-x-60'>
                    <SortProdouct />
               </div>
            </div>
            <div className={`h-[500px] rounded shadow-md ${products.length > 5 ? '@apply overflow-y-auto' : ``}`}>
                <table className='table w-full'>
                    <thead className='text-lg'>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th className='text-center'>Tag</th>
                            <th className='text-center'>Actions</th>
                        </tr>               
                    </thead>
                    <ListProducts params={params}/>
                </table>
            </div>
           
       </div>
       
  )
}



