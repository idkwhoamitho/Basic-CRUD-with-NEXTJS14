import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export const GET = async(req: Request, {params}: {params: {id: string}}) => 
{
    // const body = await req.body
    
  let res;
  try {
    switch (params.id) {
      default:
        res = await prisma.product.findMany({
          select: {
            user: true,
            userId: true,
            ProductName: true,
            ProductPrice: true,
            tagId: true,
            tag: true,
          },
        });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching data!", status: 500 });
  }

  return NextResponse.json(res, { status: 200 });
}
