'use client';

import RHForm from "@/src/components/Form/RHForm";
import RHInput from "@/src/components/Form/RHInput";
import Loading from "@/src/components/UI/Loading";
import { useResetPassword } from "@/src/hooks/Auth.hooks";
import { resetPasswordValidationSchema } from "@/src/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ResetPassword = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    const router = useRouter();
    const { mutate: handleResetPassword, isPending, isSuccess, data } = useResetPassword();
    useEffect(() => {
        if (data && !data?.success) {
            toast.error(data?.message as string);
        }


        if (!isPending && isSuccess) {
            toast.success(data?.message as string);
            router.push('/login');
        }
    }, [isPending, isSuccess, data]);


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        handleResetPassword({ ...data, email, token });
    };

    return (
        <>
            {isPending && <Loading />}
            <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
                <h3 className="my-4 text-3xl font-bold">Reset Password</h3>
                <p className="mb-6 text-lg">Enter your new password to reset it</p>

                <div className="w-full max-w-md">
                    <RHForm onSubmit={onSubmit}
                        resolver={zodResolver(resetPasswordValidationSchema)}
                    >
                        <div className="py-4">
                            <RHInput
                                name="newPassword"
                                label="New Password"
                                type="password"

                            />
                        </div>

                        <Button
                            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                            size="lg"
                            type="submit"
                        >
                            Set New Password
                        </Button>
                    </RHForm>

                    <div className="text-center mt-4 ">
                        Remember your password? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;