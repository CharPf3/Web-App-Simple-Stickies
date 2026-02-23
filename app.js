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


        clearAll() {
            const confirmed = confirm("Delete all notes?");

            if (confirmed) {
                this.stickies = [];
                localStorage.removeItem(this.storageKey);
            }
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