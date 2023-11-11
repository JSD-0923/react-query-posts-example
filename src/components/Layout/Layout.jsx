import { Header } from "./Partials/Header"

export const Layout = (props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {props.children}
            </main>
        </div>

    )
}