import {create} from "zustand";
import {persist} from "zustand/middleware"; 

export type CompanionId = "companion1" | "companion2";

interface CompanionState {
    companion: CompanionId;
    setCompanion: (id: CompanionId) => void;
}

export const useCompanionStore = create<CompanionState>()(
    persist(
        (set) => ({
            companion: "companion1",
            setCompanion: (id) => set({ companion: id}),
        }),
        {name: "atlas-companion"}
    )
);