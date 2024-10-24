"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { loginValidationSchema } from "@/src/schemas";
import RHForm from "@/src/components/Form/RHForm";
import RHInput from "@/src/components/Form/RHInput";
import { useUserLogin } from "@/src/hooks/Auth.hooks";
import { useUser } from "@/src/context/user.provider";
import Loading from "@/src/components/UI/Loading";

const LoginPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const redirect = searchParams.get("redirect");

    const { mutate: handleUserLogin, isPending, isSuccess, data, } = useUserLogin();
    const { setIsLoading: userLoading } = useUser();



    useEffect(() => {

        if (data && !data?.success) {
            toast.error(data?.message as string);
        }

        if (!isPending && isSuccess) {
            toast.success(data?.message as string);
            if (redirect) {
                router.push(redirect)

            } else {
                router.push('/')
            }

        }

    }, [isPending, isSuccess, data])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        handleUserLogin(data);
        userLoading(true);


    };

    return (
        <>
            {
                isPending && <Loading></Loading>
            }
            <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
                <h3 className="my-2 text-2xl font-bold">Login with Recipe Sharing Community</h3>
                <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
                <div className="w-[35%]">
                    <RHForm
                        onSubmit={onSubmit}
                        resolver={zodResolver(loginValidationSchema)}

                    >
                        <div className="py-3">
                            <RHInput name="email" label="Email" type="email" />
                        </div>
                        <div className="py-3">
                            <RHInput name="password" label="Password" type="password" />
                        </div>

                        <Button
                            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                            size="lg"
                            type="submit"
                        >
                            Login
                        </Button>
                    </RHForm>
                    <div className="flex justify-between items-center py-2">
                        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="text-center">
                        Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
                    </div>

                </div>
            </div>




        </>


    );
};

export default LoginPage;