

import connectDB from '@/app/config/connectDB';
import GateKeeper from '@/models/gateKeeperModel';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
    const { name, onDuty } = await request.json();
    await connectDB();
    await GateKeeper.create({ name, onDuty});
    return NextResponse.json({message: "Gatekeeper created successfully!"}, {status: 201});
}

export async function GET() {
    await connectDB();
    const gatekeepers = await GateKeeper.find();
    return NextResponse.json({gatekeepers});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectDB();
    await GateKeeper.findByIdAndDelete(id);
    return NextResponse.json({message: "GateKeeper deleted successfully!"}, {status: 201});
}