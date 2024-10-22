'use client'

import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { useCreateProject } from "@/src/hooks/Project.hooks";
import RHModal from "./RHModal";
import RHForm from "../Form/RHForm";
import RHTextarea from "../Form/RHTextarea";
import RHInput from "../Form/RHInput";
import RHSelect from "../Form/RHSelect";

import { ChangeEvent, useState } from "react";
import { Plus, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";






const CreateProjectModal = () => {
    const [imageFiles, setImageFiles] = useState<File[] | []>([])
    const [imagePreviews, setImagePreviews] = useState<string[] | []>([])

    const router = useRouter();

    const methods = useForm();
    const { control, handleSubmit } = methods;
    const { mutate: createProject, error: apiError, data: mutateData, isError, isPending: createProjectPending, isSuccess } = useCreateProject();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "features",
    });



    const handleFieldAppend = () => {
        append({ name: "features" });
    };


    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files![0];
        setImageFiles((prev) => [...prev, files])

        if (files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews((prev) => [...prev, reader.result as string])
            }

            reader.readAsDataURL(files);
        }


    }








    const optiondata = [
        { label: 'Web Development', value: 'Web Development' },
        { label: 'Mobile Development', value: 'Mobile Development' },
        { label: 'Data Science', value: 'Data Science' },
        { label: 'Other', value: 'Other' },
    ]


    const departmentOptions = optiondata?.map(item => (
        {
            label: item.label,
            key: item.value
        }
    ))
    const collaboratorOptions = optiondata?.map(item => (
        {
            label: item.label,
            key: item.value
        }
    ))
    const technologyOptions = optiondata?.map(item => (
        {
            label: item.label,
            key: item.value
        }
    ))


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {




        const projectData = {
            ...data,
            features: data?.features?.map((item: { value: string }) => item.value),
        }

        console.log(projectData)



    }
    return (

        <RHModal
            buttonClassName="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
            buttonText="Add Project"
            title="Create New Project"
        >
            <RHForm
                onSubmit={onSubmit}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300"
            >
                <div className="flex flex-col space-y-6">

                    {/* Title */}
                    <RHInput
                        name="title"
                        label="Project Title"
                        type="text"
                        size="sm"
                        variant="bordered"
                        placeholder="Enter your project title"
                        className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light transition duration-200"
                        required
                    />

                    {/* Github Repositories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RHInput
                            name="githubRepoServer"
                            label="Github Repo (Server)"
                            type="text"
                            size="sm"
                            variant="bordered"
                            placeholder="Enter server repository link"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                            required
                        />
                        <RHInput
                            name="githubRepoClient"
                            label="Github Repo (Client)"
                            type="text"
                            size="sm"
                            variant="bordered"
                            placeholder="Enter client repository link"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                            required
                        />
                    </div>

                    {/* Live Demo and Image Upload */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RHInput
                            name="liveDemo"
                            label="Live Demo Link"
                            type="url"
                            size="sm"
                            variant="bordered"
                            placeholder="Enter live demo URL"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                        />

                        {/* Image Upload */}
                        <div>
                            <label
                                className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-150"
                                htmlFor="image"
                            >
                                Upload Image
                            </label>
                            <input
                                multiple
                                className="hidden"
                                id="image"
                                type="file"
                                onChange={(e) => handleImageChange(e)}
                            />

                        </div>
                    </div>

                    {/* Image Previews */}
                    <div className="flex gap-4 mt-4 flex-wrap">
                        {imagePreviews?.length > 0 &&
                            imagePreviews.map((url) => (
                                <div key={url} className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                                    <img className="object-cover w-full h-full" src={url} alt="preview" />
                                </div>
                            ))}
                    </div>
                    {/* Technologies and Collaborators */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RHSelect
                            name="technologies"
                            label="Technologies Used"
                            size="sm"
                            options={technologyOptions}
                            placeholder="Select technologies"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                        />
                        <RHSelect
                            name="collaborators"
                            label="Collaborators"
                            size="sm"
                            options={collaboratorOptions}
                            placeholder="Select collaborators"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                        />
                    </div>

                    {/* Start Date and End Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RHInput
                            name="startDate"
                            label="Start Date"
                            type="date"
                            size="sm"
                            variant="bordered"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                            required
                        />
                        <RHInput
                            name="endDate"
                            label="End Date"
                            type="date"
                            size="sm"
                            variant="bordered"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                        />
                    </div>

                    {/* Tags and Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RHInput
                            name="tags"
                            label="Tags"
                            type="text"
                            size="sm"
                            variant="bordered"
                            placeholder="Add project tags"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                        />
                        <RHSelect
                            name="category"
                            label="Project Category"
                            size="sm"
                            options={departmentOptions}
                            placeholder="Select project category"
                            className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                        />
                    </div>

                    {/* Project Description */}
                    <RHTextarea
                        name="description"
                        label="Project Description"
                        size="sm"
                        variant="bordered"
                        placeholder="Describe the project in detail"
                        className="border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-primary dark:focus:ring-primary-light"
                        required
                    />

                    {/* Features List */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-xl font-medium text-gray-800 dark:text-white">Features list</h1>
                            <Button
                                isIconOnly
                                onClick={() => handleFieldAppend()}
                                className="bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                            >
                                <Plus className="text-white" />
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {fields.map((field, index) => (
                                <div key={field.id} className="flex items-center gap-3">
                                    <RHInput
                                        label="Features"
                                        name={`features.${index}.value`}
                                        placeholder="Enter Features"
                                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                    />
                                    <Button
                                        isIconOnly
                                        className="h-12 w-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md dark:bg-red-600 dark:hover:bg-red-700"
                                        onClick={() => remove(index)}
                                    >
                                        <TrashIcon className="text-white" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        className="flex-1 mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
                        type="submit"
                    >
                        {createProjectPending ? "Adding..." : "Add Project"}
                    </Button>
                </div>
            </RHForm>
        </RHModal>

















    );
};

export default CreateProjectModal;