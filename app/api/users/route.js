import connectDB from '@/app/config/connectDB';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcryptjs";

export async function POST(request) {
    const { fullName, email, role, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 12);
    await connectDB();
    await User.create({ fullName, email, role, password: hashedPassword});
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