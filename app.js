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

        saveToStorage() {
            localStorage.setItem(
                this.storageKey,
                JSON.stringify(this.stickies)
            );
        },

        loadFromStorage() {
            const saved = localStorage.getItem(this.storageKey);

            if (saved) {
                this.stickies = JSON.parse(saved);
            } else {
                this.stickies = [];
            }
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
        
    },

    watch: {
        stickies: {
            handler() {
                this.saveToStorage();
            },
            deep: true
        }
    }
}).mount("#app");