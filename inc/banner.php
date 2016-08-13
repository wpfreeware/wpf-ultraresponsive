    <!--=========== BEGIN COURSE BANNER SECTION ================-->



    
<?php if( get_header_image() ): ?> 
	<!--=========== BEGIN IMAGE BANNER SECTION ================-->
	<section id="imgBanner">
		  
		<img src="<?php echo esc_url( get_header_image() ); ?>" alt="<?php esc_attr( bloginfo( 'description' ) ) ; ?>" />
		
	</section>        
	<!--=========== END IMAGE BANNER SECTION ================-->
<?php endif; ?>    