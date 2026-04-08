import { useState } from "react"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { NOTES_UI_TEXT } from "../constants/notes-ui.constants"

export function NotesBoard() {
  const [noteText, setNoteText] = useState("")
  const [notes, setNotes] = useState([])

  const SectionTag = HTML_TAGS.SECTION
  const TitleTag = HTML_TAGS.H2
  const InputTag = HTML_TAGS.INPUT
  const ButtonTag = HTML_TAGS.BUTTON
  const ListTag = HTML_TAGS.UL
  const ListItemTag = HTML_TAGS.LI
  const ParagraphTag = HTML_TAGS.P

  const handleAddNote = () => {
    if (noteText.trim() === "") {
      return
    }

    const newNote = {
      id: Date.now(),
      text: noteText,
    }

    setNotes([newNote, ...notes])
    setNoteText("")
  }

  return (
    <SectionTag>
      <TitleTag>{NOTES_UI_TEXT.BOARD_TITLE}</TitleTag>

      <InputTag
        type="text"
        value={noteText}
        onChange={(event) => setNoteText(event.target.value)}
        placeholder={NOTES_UI_TEXT.INPUT_PLACEHOLDER}
      />

      <ButtonTag onClick={handleAddNote}>
        {NOTES_UI_TEXT.ADD_BUTTON}
      </ButtonTag>

      {notes.length === 0 ? (
        <ParagraphTag>{NOTES_UI_TEXT.EMPTY_MESSAGE}</ParagraphTag>
      ) : (
        <ListTag>
          {notes.map((note) => (
            <ListItemTag key={note.id}>{note.text}</ListItemTag>
          ))}
        </ListTag>
      )}
    </SectionTag>
  )
}