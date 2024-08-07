import { create } from 'zustand'

interface ViewState {
  isOpen: boolean
  view: string
  onClose: () => void
  setView: (view: string) => void
}

export const useJobsView = create<ViewState>((set) => ({
  isOpen: false,
  view: 'grid',
  onClose: () => set({ isOpen: false }),
  setView: (view) => set({ view })
}))
