import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTE_PATHS } from "@/shared/constants/routes.constants"
import HomePage from "@/features/tasks/pages/HomePage"
import { Navbar } from "@/shared/components/Navbar"
import { NotesPage } from "@/features/notes/pages/NotesPage"

export function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
        <Route path={ROUTE_PATHS.NOTES} element={<NotesPage />} />
      </Routes>
    </BrowserRouter>
  )
}