import { create } from "zustand";

const useMockDataStore = create((set) => ({
  templates: [],
  addTemplates: (data) => {
    set((state) => ({
      templates: [...state.templates, data],
    }));
  },
}));

export default useMockDataStore;
