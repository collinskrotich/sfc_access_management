import { NextResponse } from 'next/server';
import User from '@/models/user';
import connectDB from '@/app/config/connectDB';

export async function PUT(request, {params}) {
    const { id } = params;
    const {newFullName: fullName, newEmail: email, newRole: role, newPassword:password} = await request.json();
    await connectDB();
    await User.findByIdAndUpdate(id, { fullName, email, role, password });
    
    return NextResponse.json({message: "User updated successfully!"}, {status: 200});
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectDB();
    const user = await User.findOne({ _id: id});
    return NextResponse.json({user}, {status: 200});
}