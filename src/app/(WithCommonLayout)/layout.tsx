import Footer from "@/src/components/UI/footer";
import { Navbar } from "@/src/components/UI/navbar";



export default function Layout({ children }: { children: React.ReactNode }) {


    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}