import HeadingComponent from "@/src/components/UI/HeadingComponent";
import Link from "next/link";


const Certification = () => {
    const certifications = [
        {
            name: "Certified Web Developer",
            issuingOrganization: "Code Academy",
            issueDate: "2022-05-10T00:00:00.000Z",
            expirationDate: "2024-05-10T00:00:00.000Z",
            credentialUrl:
                "https://www.example.com/certifications/cwd"
            ,
            isDeleted: false,
            createdAt: "2022-05-10T10:30:00.000Z",
            updatedAt: "2023-07-20T14:00:00.000Z"
        },
        {
            name: "JavaScript Developer Certification",
            issuingOrganization: "Udemy",
            issueDate: "2021-03-15T00:00:00.000Z",
            expirationDate: null,
            credentialUrl:
                "https://www.example.com/certifications/js-dev"
            ,
            isDeleted: false,
            createdAt: "2021-03-15T09:45:00.000Z",
            updatedAt: "2022-12-22T12:15:00.000Z"
        },
        {
            name: "React.js Certification",
            issuingOrganization: "FreeCodeCamp",
            issueDate: "2020-09-01T00:00:00.000Z",
            expirationDate: null,
            credentialUrl:
                "https://www.example.com/certifications/react-cert"
            ,
            isDeleted: false,
            createdAt: "2020-09-01T08:00:00.000Z",
            updatedAt: "2021-11-11T10:30:00.000Z"
        },
        {
            name: "Node.js Certification",
            issuingOrganization: "Coursera",
            issueDate: "2019-12-20T00:00:00.000Z",
            expirationDate: "2022-12-20T00:00:00.000Z",
            credentialUrl:
                "https://www.example.com/certifications/node-cert"
            ,
            isDeleted: false,
            createdAt: "2019-12-20T14:10:00.000Z",
            updatedAt: "2020-09-05T15:30:00.000Z"
        },
        {
            name: "Full-Stack Web Development",
            issuingOrganization: "Google Developer Certification",
            issueDate: "2023-01-05T00:00:00.000Z",
            expirationDate: null,
            credentialUrl:
                "https://www.example.com/certifications/fullstack-dev"
            ,
            isDeleted: false,
            createdAt: "2023-01-05T12:30:00.000Z",
            updatedAt: "2023-08-21T16:20:00.000Z"
        }
    ]



    return (
        <section className="mb-12">
            <HeadingComponent heading="My Certifications" subHeading="Certifications" />
            <div className="flex flex-wrap justify-center gap-4">
                {certifications?.map((cert, index) => (
                    <Link
                        key={index}
                        href={cert?.credentialUrl || "#"}
                        className="flex items-center p-3 border rounded-lg bg-white dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white transition duration-300 shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="font-semibold">{cert.name}</span>
                        <p className="ml-2 text-sm text-gray-600 dark:text-gray-300">({cert?.issuingOrganization})</p>
                    </Link>
                ))}
            </div>
        </section>

    );
};

export default Certification;