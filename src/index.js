
import './style.scss';
//var registerBlockType = wp.blocks.registerBlockType;
const { registerBlockType } = wp.blocks;
//var __ = wp.i18n.__;
const { __ } = wp.i18n;


registerBlockType("swami-gutenbeg-block/swami-startblock",{
    title: __('Swami Start Block',"swami-gutenbeg-block"),
    description: __("Blocco di partenza","swami-gutenbeg-block"),
    category: "widgets",
    icon: "welcome-learn-more",
    keywords: ['swami','start block'],
    edit: function(){
        return <p>edit function</p>;//"edit function";
    },
    save: function(){
        return <p>Save function</p>;//"save function";
    }
})