import { NavBar } from "./navbar";

export const Header =()=>{
    return (
        <header className="flex items-center justify-between bg-sky-300 text-white h-20 px-8 text-lg">
            <h1 className="text-2xl font bolder border-white p-2">LOGO</h1>

            <section className="flex gap-5">
                <NavBar />
            </section>
        </header>
    )
}