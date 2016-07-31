<div class="blog_commentbox">
  <p><i class="fa fa-user"></i> <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>"><?php the_author(); ?> </a></p>
  <p><i class="fa fa-calendar"></i> <?php the_time( get_option( 'date_format' ) ); ?></p>
  <p><i class="fa fa-bars"></i> <?php the_category(', '); ?></p>
  <p> <?php if ( comments_open() ) :  ?> <i class="fa fa-comments"></i> <?php comments_popup_link( __('No Comment', 'wpf-ultraresponsive'), __('1 Comment', 'wpf-ultraresponsive'), __('% Comments', 'wpf-ultraresponsive')); endif; ?> <?php edit_post_link(__('Edit', 'wpf-ultraresponsive'), ' &#124; ', ''); ?></p>
</div>