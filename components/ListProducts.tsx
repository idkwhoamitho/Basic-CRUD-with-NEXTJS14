import React from 'react'
import { PrismaClient } from '@prisma/client';
import EditProduct from './EditProduct';
import DeleteProducts from './DeleteProduct';
const prisma = new PrismaClient()





const getProducts = async (params: Number) => 
    {
        const res = await prisma.product.findMany({
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

    const getProductsByProductName = async () => 
        {
            const res = await prisma.product.findMany({
                orderBy:{
                    ProductName: 'asc'
                },
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
    
    




async function ListProducts({ params: userId }: any) {
    let [products, tags] = await Promise.all([
        getProducts(Number(userId)),
        getTags(),
    ])


    const productsByProductName = await getProductsByProductName()

    if(userId == '1'){
        return(
            <tbody className='text-lg'>
                    {                        
                         products.map((product,index) => 
                            {
                                return(
                                    <tr key={product.id}>
                                        <td>{index + 1}</td>
                                        <td>{product.ProductName}</td>
                                        <td>{product.ProductPrice}</td>
                                        <td className='text-center'>{product.tag.productTagName}</td>
                                        <td>
                                            <EditProduct tags={tags} product={product}/>
                                            <DeleteProducts product={product}/>                                    
                                        </td>
                                    </tr>
                                ) 
                            })
                    
                    }
                        
                </tbody>
        )
    }
    
    if(userId == '2')
    {
        return(
            <tbody className='text-lg'>
                    {                        
                         productsByProductName.map((product,index) => 
                            {
                                return(
                                    <tr key={product.id}>
                                        <td>{index + 1}</td>
                                        <td>{product.ProductName}</td>
                                        <td>{product.ProductPrice}</td>
                                        <td className='text-center'>{product.tag.productTagName}</td>
                                        <td>
                                            <EditProduct tags={tags} product={product}/>
                                            <DeleteProducts product={product}/>                                    
                                        </td>
                                    </tr>
                                ) 
                            })
                    
                    }
                        
                    </tbody>
        )
    }

    if(products.length == 0)
    {
        return(
            <h1>Something went wrong</h1>

        )
    }

    // return(
    //     <h1>
    //         SOMETHING WENT WRONG WHILE FETCHING DATA
    //     </h1>
    // )
//     return (
//     <div>ListProducts</div>
//   )
}

export default ListProducts