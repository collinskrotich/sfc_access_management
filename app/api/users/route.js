import connectDB from '@/app/config/connectDB';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
    const { fullName, email, role, password, created } = await request.json();
    await connectDB();
    await User.create({ fullName, email, role, password});
    return NextResponse.json({message: "User created successfully!"}, {status: 201});
}

export async function GET() {
    await connectDB();
    const rusers = await User.find();
    return NextResponse.json({rusers});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message: "User deleted successfully!"}, {status: 201});
}