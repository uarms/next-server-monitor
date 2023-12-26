import {Input, Button} from "@nextui-org/react";
import uarms from "../uarms.svg";
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="flex flex-col items-center h-[80vh] w-full justify-center">
            <div className="flex flex-col gap-4 w-96 max-w-full my-8 p-4 rounded-xl border-1 items-center">
                <Image src={uarms} alt="UARMS logo" height={128}/>
                <h1 className="text-xl text-center">
                    登录
                </h1>
                <Input label="管理员用户名"/>
                <Input label="管理员密码" type="password"/>
                <Button color="primary" className="w-full">登录</Button>
            </div>
        </main>
    )
}