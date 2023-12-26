import {NextApiRequest} from "next";
import {NextResponse} from "next/server";
import {newToken, storeToken} from "@/server/tokenStore";
import loginPassword from "@/config/loginPassword";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    token: string;
}

export async function POST(req: Request) {
    const messages = await req.json() as LoginRequest;
    if (messages.username !== loginPassword.username || messages.password !== loginPassword.password) {
        return NextResponse.json<LoginResponse>({success: false, token: ''});
    }
    const token = newToken();
    storeToken(token);
    return NextResponse.json<LoginResponse>({success: true, token});
}