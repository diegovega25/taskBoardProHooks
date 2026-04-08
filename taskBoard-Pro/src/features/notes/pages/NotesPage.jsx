import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { NotesBoard } from "../components/NotesBoard"
import { NOTES_UI_TEXT } from "../constants/notes-ui.constants"

export function NotesPage() {
  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H2

  return (
    <SectionTag>
      <TitleTag>{NOTES_UI_TEXT.PAGE_TITLE}</TitleTag>
      <NotesBoard />
    </SectionTag>
  )
}