import { HTML_TAGS } from "@/shared/constants/html-tags.constants"
import { TaskBoard } from "@/features/tasks/components/TaskBoard"
import { ThemeProvider } from "@/features/theme/context/ThemeProvider"
import { ThemeToggle } from "@/features/theme/components/ThemeToggle"
import { useTheme } from "@/features/theme/hooks/useTheme"
import { useDocumentTitle } from "@/shared/hooks/useDocumentTitle"

function AppContent() {
  const MainTag = HTML_TAGS.MAIN
  const TitleTag = HTML_TAGS.H1
const { theme } = useTheme()
  useDocumentTitle("TaskBoard Hooks Lab")

  return (
    <MainTag className={theme}>
      {/* <TitleTag>TaskBoard Hooks Lab</TitleTag> */}
      <ThemeToggle />
      <TaskBoard />
    </MainTag>
  )
}

function HomePage() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default HomePage
