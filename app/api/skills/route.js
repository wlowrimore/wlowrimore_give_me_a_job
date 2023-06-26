import { NextResponse } from "next/server";
import skills from "./data.json";

export async function GET(request) {
  return NextResponse.json(skills);
}
