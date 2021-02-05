<?php
/*
Plugin Name: Swami Gutenberg Block
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('Swami_Block_Plugins')) {

    /**
     * Plugin Class Swami_Block_Plugins
     */
    class Swami_Block_Plugins
    {
        /**
         * The plugin assets directory.    
         * @var string
         */
        public $assets_dir = "assests";

        public function __construct()
        {

            // Definiamo le costanti
            $this->define_constants();

            // Hook for register block
            add_action('init', array($this, 'swami_block_register'));
        }

        /**
         * Definizione delle costanti
         */
        public function define_constants()
        {
            define('SWAMI_BLOCK_PLUGIN_DIR', trailingslashit(plugin_dir_path(__FILE__)));
            define('SWAMI_BLOCK_BUILD_DIR', SWAMI_BLOCK_PLUGIN_DIR. trailingslashit($this->assets_dir));
        }

        /**
         * Metodo per Restistrare i blocchi
         */
        public function swami_block_register()
        {
            /**
             * Registra il block nel front end
             */
            wp_register_script(
                'swami_block_script_editor',
                plugins_url($this->assets_dir.'/index-bundle.js', __FILE__ ),
                array('wp-blocks', 'wp-i18n','wp-element'),
                time()
            ); 

            /**
             * Registra il blocco in Gutenberg
             */
            register_block_type(
                'swami-gutenbeg-block/swami-startblock',
                array(
                    'editor_script' => 'swami_block_script_editor',
                    // 'script'
                    // 'style'
                    // 'editor_style'
                )
            );

            
        }
    }

    new Swami_Block_Plugins();
}
