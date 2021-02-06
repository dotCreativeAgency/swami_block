
//const { registerBlockType } = wp.blocks;
import { registerBlockType } from '@wordpress/blocks';
const { __ } = wp.i18n;
//import { useBlockProps } from '@wordpress/block-editor';

registerBlockType("swami-gutenbeg-block/swami-startblock",{
    title: __('Swami Start Block',"swami-gutenbeg-block"),
    description: __("Blocco di partenza","swami-gutenbeg-block"),
    category: "swami-category",
    icon: "welcome-learn-more",
    keywords: ['swami','start block','#'],
    edit: () => {
        return <p >edit function</p>;//"edit function";
    },
    save: () => {
        return <p >Save function</p>;//"save function";
    }
})