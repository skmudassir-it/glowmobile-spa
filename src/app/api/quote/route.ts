import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: wire to email/SendGrid, SMS, or CRM webhook
    console.log("Booking request:", body);
    return NextResponse.json({ success: true, message: "Booking request received" });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
