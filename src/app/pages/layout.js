import NavBar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { FriendProvider } from "@/components/context/FriendContext";

export default function PagesLayout({ children }) {
    return (
        <FriendProvider>
            <NavBar />

            <main>
                {children}
               
            </main>

            <Footer />
        </FriendProvider>
    );
}