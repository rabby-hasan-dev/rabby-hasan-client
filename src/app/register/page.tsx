
"use client";

import RHForm from "@/src/components/Form/RHForm";
import RHInput from "@/src/components/Form/RHInput";
import Loading from "@/src/components/UI/Loading";
import { useUserRagistration } from "@/src/hooks/Auth.hooks";
import registerValidationSchema from "@/src/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";


export default function RegisterPage() {
    const router = useRouter();
    const [imageFiles, setImageFiles] = useState<File | null>(null)
    const { mutate: handleUserRegistration, isPending, isSuccess, data } = useUserRagistration();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {


        const formData = new FormData();
        if (imageFiles !== null) {
            formData.append('file', imageFiles)
            formData.append('data', JSON.stringify(data));

            handleUserRegistration(formData);
        } else {
            toast.error("Please input profile picture")
        }


    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files![0];
        setImageFiles(files)

    }


    useEffect(() => {
        if (data && !data?.success) {
            toast.error(data?.message as string);
        }
        if (data && !data?.success) {
            toast.error(data?.message as string);
        }

    }, [data])


    if (!isPending && isSuccess) {
        router.push("/");
    }

    return (

        <>
            {isPending && <Loading />}
            <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
                <h3 className="my-2 text-xl font-bold">Register with Recipe Sharing Community</h3>
                <p className="mb-4">For Better User  Experience</p>
                <div className="w-[35%]">
                    <RHForm
                        resolver={zodResolver(registerValidationSchema)}
                        onSubmit={onSubmit}

                    >
                        <div className="py-3">
                            <RHInput label="User Name" name="username" size="sm" />
                        </div>
                        <div className="py-3">
                            <RHInput label="Email" name="email" size="sm" />
                        </div>

                        <div className="py-3">
                            <RHInput
                                label="Password"
                                name="password"
                                size="sm"
                                type="password"
                            />
                        </div>

                        <div className="py-3">
                            <label
                                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                                htmlFor="image"
                            >
                                Upload Profile Picture
                            </label>
                            <input
                                multiple
                                className="hidden"
                                id="image"
                                type="file"
                                onChange={(e) => handleImageChange(e)}
                            />

                        </div>

                        <Button
                            className="my-3 w-full rounded-md bg-default-900 text-default"
                            size="lg"
                            type="submit"
                        >
                            Registration
                        </Button>
                    </RHForm>
                    <div className="text-center">
                        Already have an account ? <Link href={"/login"}>Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}