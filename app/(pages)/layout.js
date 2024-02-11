import Header from "@/components/header"

export default async function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
