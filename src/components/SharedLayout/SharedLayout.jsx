import { Header } from "components/Header/Header"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
      <>
        <Header />
        <main>
          <Suspense fallback={'Loading..'}>
            <Outlet/>
          </Suspense>
        </main>
      </>
      
    )
  }