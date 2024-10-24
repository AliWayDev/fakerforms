import { create } from 'zustand';

const useSearch = create((set) => ({
    searchText: '',
    setSearchText: (text) => set({ searchText: text }) 
}));

export default useSearch;