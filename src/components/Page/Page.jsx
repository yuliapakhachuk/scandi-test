import "./Page.css";
import { Footer } from "../Footer/Footer";
import { Container } from "../Container/Container";


export function Page({ children }) {
    return (
        <>
        <main>
            <Container>
                {children}
            </Container>
        </main>
        <Footer />
        </>
    );
}
