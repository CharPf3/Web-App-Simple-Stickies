Vue.createApp({
    data() {
        return {
            stickies: [],
            storageKey: "sticky-notes-simple"
        };
    },

    mounted() {
    this.loadFromStorage();
    },   

    methods: {

        // ================================
        // COMMIT 3 — Add & Delete
        // ================================

        addStickie() {
            let newId;

            if (crypto.randomUUID) {
                newId = crypto.randomUUID();
            } else {
                newId = String(Date.now() + Math.random());
            }

            this.stickies.push({
                id: newId,
                text: ""
            });
        },

        deleteStickie(id) {
            this.stickies = this.stickies.filter(stickie => stickie.id !== id);
        },
        // ================================
        // COMMIT 5 — Clear All
        // ================================

        clearAll() {
            // TODO (Commit 5):
            // 1. Use confirm("Delete all notes?")
            // 2. If confirmed:
            //    - Clear the stickies array
            //    - Remove the localStorage item using this.storageKey
        },

        // ================================
        // Helper — Character Count
        // ================================

        charCount(text) {
            // This is already complete.
            // Returns the length of the text or 0 if empty.
            return (text ?? "").length;
        },

        // ================================
        // COMMIT 4 — Persistence
        // ================================

        saveToStorage() {
            // TODO (Commit 4):
            // Save this.stickies to localStorage.
            //
            // Must use:
            // JSON.stringify(...)
        },

        loadFromStorage() {
            // TODO (Commit 4):
            // Load notes from localStorage.
            //
            // Must:
            // - Use JSON.parse(...)
            // - If nothing exists, set this.stickies = []
            //
            // In Commit 4:
            // - Call this method from mounted().
            // - Remove hard-coded notes from Commit 2.
        }
    },

    watch: {
        stickies: {
            handler() {
                // TODO (Commit 4):
                // Call this.saveToStorage() here so edits
                // auto-save without clicking any button.
            },
            deep: true
        }
    }
}).mount("#app");