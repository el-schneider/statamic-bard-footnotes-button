const { mergeAttributes } = Statamic.$bard.tiptap;

export default class Footnote {

    constructor(options = {}) {
        this.options = options
        console.log('this:', this)
    }

    name() {
        return 'footnote';
    }

    schema() {
        return {
            attrs: {
                index: {
                    default: 12,
                },
            },
            group: "inline",
            content: "inline*",
            inline: true,
            selectable: true,
            draggable: true,
            parseDOM: [{ tag: "footnote" }],
            toDOM: (node) => [
                "span",
                {
                    class: "footnote"
                    // class: `${JSON.stringify(node)}`
                },
                0,
            ],
        };
    }



    commands({ type }) {
        return () => (state, dispatch) => {
            const { selection } = state
            const position = selection.anchor

            // console.log('selection:', selection)
            // console.log('position:', position)
            // console.log('dispatch:', dispatch)
            // console.log('state:', state)
            // console.log('state.doc.content:', state.doc.content)

            let tr = state.tr
            const node = type.create()

            tr.replaceSelectionWith(node)

            dispatch(tr)

            return true;
        }
    }

    inputRules({ type }) {
        return [] // Input rules if you want
    }

    plugins() {
        return []
    }

    pasteRules() {
        return []
    }
}
