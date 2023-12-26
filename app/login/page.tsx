"use client";

import {Input, Button} from "@nextui-org/react";
import uarms from "../uarms.svg";
import Image from "next/image";
import React from "react";
import {LoginRequest, LoginResponse} from "@/app/api/login/route";
import axios, {AxiosPromise} from "axios";

export default function LoginPage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const loginRequest = async (): Promise<AxiosPromise<LoginResponse>> => {
        return await axios.post("/api/login", {
            username: username,
            password: password
        } as LoginRequest)
    }

    const login = async () => {
        const response = await loginRequest();
        if (response.data.success) {
            alert("登录成功")
        } else {
            alert("登录失败")
        }
    }

    return (
        <main className="flex flex-col items-center h-[80vh] w-full justify-center">
            <form className="flex flex-col gap-4 w-96 max-w-full my-8 p-4 rounded-xl border-1 items-center">
                <Image src={uarms} alt="UARMS logo" height={128}/>
                <h1 className="text-xl text-center">
                    登录
                </h1>
                <Input label="管理员用户名" value={username} onValueChange={e => setUsername(e)}/>
                <Input label="管理员密码" type="password" value={password} onValueChange={e => setPassword(e)}/>
                <Button color="primary" className="w-full" onClick={login}>登录</Button>
            </form>
        </main>
    )
}