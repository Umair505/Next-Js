import connectToDatabase from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const productCollection = await connectToDatabase('products');
    const result = await productCollection.insertOne(body);
    
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
};