<!-- Blogs Section -->
<div class="bg-white py-5">
    <div class="container">
        <?php
        $args = array(
            'post_type' => 'lab-reports',
            'posts_per_page' => -1,
        );
        $query = new WP_Query($args);

        if ($query->have_posts()) { ?>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> 
                <?php
                while ($query->have_posts()) {
                    $query->the_post();
                    if (have_rows('product_variant_pdfs')):
                        while (have_rows('product_variant_pdfs')) : the_row();
                            $variant_image = get_sub_field('variant_image');
                            $variant_name = get_sub_field('variant_name');
                            $variant_url = get_sub_field('variant_url');
                ?>
                            <div class="col-lg-3 col-sm-6 col-md-5 col-11 text-center mb-5 mb-md-5">
                                <div class="mx-auto box_shadow rounded-4 transition cursor-pointer h-100">
                                    <a class="d-block lab-product"
                                        href="<?php echo esc_url($variant_url); ?>">
                                        <img class="w-100 lab-product-img"
                                            src="<?php echo esc_url($variant_image['url']); ?>" alt="<?php echo esc_attr($variant_image['alt']); ?>" />
                                        <h5 class="text_md fw-semibold">
                                            <?php echo $variant_name; ?>
                                        </h5>
                                    </a>
                                    <a href="<?php echo esc_url($variant_url); ?>" target="_blank"
                                        class="bg_primary text-white w-100 text_md mt-2 border-0 py-3 fw-bold rounded_bottom_10 d-block">
                                        VIEW CERTIFICATE
                                    </a>
                                </div>
                            </div>
                    <?php
                        endwhile;
                    endif;
                    ?>
                <?php
                }
                wp_reset_postdata(); ?>
            </div>
        <?php
        } ?>
    </div>
</div>