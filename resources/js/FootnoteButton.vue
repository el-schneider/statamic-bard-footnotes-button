<template>
    <div class="inline-block relative">
        <button
            class="bard-toolbar-button"
            v-html="button.html"
            v-tooltip="button.text"
            @click="addFootnote()"
        />
    </div>
</template>

<script>
export default {
    mixins: [BardToolbarButton],
    methods: {
        addFootnote() {
            this.editor.commands.footnote();
        },
    },
};
</script>
