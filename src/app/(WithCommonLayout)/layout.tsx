import Footer from "@/src/components/footer";
import { Navbar } from "@/src/components/navbar";



export default function Layout({ children }: { children: React.ReactNode }) {


    return (
        <div className="relative flex flex-col h-screen">

            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}