import Footnote from './Footnote'
import FootnoteButton from "./FootnoteButton.vue";

Statamic.$bard.addExtension(({ node }) => node(new Footnote));


Statamic.$bard.buttons((buttons) => {
    buttons.push({
        name: 'footnote',
        text: __('Footnote'),
        command: 'footnote',
        html: 'FN',
        component: FootnoteButton,
    })
})
