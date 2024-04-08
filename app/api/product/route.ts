import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Product } from "@prisma/client";
const prisma = new PrismaClient()

export const POST = async(request: Request) => 
{
    const body = await request.json()
    const product = await prisma.product.create({
        data:{
            ProductName:body.productName,
            ProductPrice:body.productPrice,
            tagId: parseInt(body.productTag),
            userId: body.userId
        }
    })

    return NextResponse.json(product)
}


