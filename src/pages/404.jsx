import { Header } from "../components/header"

export const NotFound=()=>{
    return (
        <>
            <Header/>
          <main>
            <div  className="bg-red-200 flex justify-center items-center min-h-[80vh]">
                <img src="meditation.png" alt="" />
            </div>
          </main>
        </>
    )
}