import connectDB from '@/app/config/connectDB';
import Access from '@/models/accessModel';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
    const { fullName, idNo, phoneNo,reason,company,department,accessGranted,accessGrantedBy,timeIn,timeOut  } = await request.json();
    await connectDB();
    await Access.create({ fullName, idNo, phoneNo, reason, company, department, accessGranted, accessGrantedBy, timeIn, timeOut});
    return NextResponse.json({message: "Access created successfully!"}, {status: 201});
}

export async function GET() {
    await connectDB();
    const access = await Access.find();
    return NextResponse.json({access});
}