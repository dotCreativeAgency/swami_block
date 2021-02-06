<?php
/*
    Plugin Name: Swami Gutenberg Block
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('Swami_Block_Plugins')) {

    /**
     * Class Swami_Block_Plugins
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

            // Aggiungiamo la catergoria personalizzata
            add_filter('block_categories',array($this,"swami_blocks_categories"),10,2);

            // Hook for register block
            add_action('init', array($this, 'swami_blocks_register'));
        }

        /**
         * Definizione delle costanti
         */
        public function define_constants()
        {
            define('SWAMI_BLOCK_PLUGIN_DIR', trailingslashit(plugin_dir_path(__FILE__)));
            define('SWAMI_BLOCK_BUILD_DIR', SWAMI_BLOCK_PLUGIN_DIR . trailingslashit($this->assets_dir));
        }

        /**
         * Metodo per Restistrare i blocchi
         */
        public function swami_blocks_register()
        {
            /**
             * Registra il block nel front end
             */
            wp_register_script(
                'swami_block_script_editor',
                plugins_url($this->assets_dir . '/js/editor-bundle.js', __FILE__),
                array('wp-blocks','wp-block-editor','wp-i18n', 'wp-element'),
                time()
            );

            wp_register_style(
                'swami_block_style',
                plugins_url($this->assets_dir . '/css/style-bundle.css', __FILE__)
            );

            $this->swami_register_blocktype('swami-startblock');

        }

        /**
         *  Metodo che registra ogni singolo blocco
         */
        private function swami_register_blocktype($block_name, $option = array())
        {
            /**
             * Registra il blocco in Gutenberg
             */
            register_block_type(
                "swami-gutenbeg-block/$block_name",
                array_merge(
                    array(
                        "editor_script" => "swami_block_script_editor",
                        // 'script'
                        'style' => "swami_block_style",
                        // 'editor_style'
                    ),
                    $option
                )
            );
        }

        public function swami_blocks_categories( $categories, $post ){
            return array_merge(
                $categories, 
                array(
                    array(
                        'slug' => 'swami-category',
                        'title'=> __('Block by swami', 'swami-blocks'),
                        'icon' => 'palmtree'
                    )
                )
                    );
        }

    }

    new Swami_Block_Plugins();
}
