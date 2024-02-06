import Header from "@/components/header"
import Container from "@/components/container"
import PrelineScript from "@/components/PrelineScript"
import { ToastContainer } from "react-toastify"

export default function Home() {
  return (
    <>
      <Header />
      <Container />
      <PrelineScript />
      <ToastContainer />
    </>
  )
}
