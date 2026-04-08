import { useMemo } from "react"

export function useTaskStats(tasks) {
    return useMemo(() => {
        const total = tasks.length
        const completed = tasks.filter((task) => task.completed).length
        const pending = total - completed

        return {
            total,
            completed,
            pending,
        }
    }, [tasks])
}