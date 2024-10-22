import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { useCreateProject } from "@/src/hooks/Project.hooks";
import RHModal from "./RHModal";
import RHForm from "../Form/RHForm";
import RHTextarea from "../Form/RHTextarea";
import RHInput from "../Form/RHInput";






const CreateProjectModal = () => {
    const { mutate: createProject, isPending, isError } = useCreateProject();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {


    }
    return (
        <RHModal buttonClassName="bg-foreground text-background" buttonText="Add Project" title="Add Project">
            <RHForm onSubmit={onSubmit}>

                <div className="flex">

                    <RHInput name="title" label="Title" type="text" size="sm" variant="bordered" />
                    <RHInput name="githubRepoServer" type="text" label="Github Repo Server link" size="sm" variant="bordered" />
                    <RHInput name="githubRepoClient" type="text" label="Github Repo Client link" size="sm" variant="bordered" />

                </div>
                <RHTextarea name="description" label="Descriptions"></RHTextarea>
                <div>
                    <Button className="flex-1 mt-2 w-full" type="submit">

                        {isPending ? "Adding.." : ' Add'}
                    </Button>
                </div>
            </RHForm>

        </RHModal>
    );
};

export default CreateProjectModal;