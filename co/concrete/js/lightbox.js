!function(a,b){"use strict";b('a[data-concrete5-link-launch="lightbox-image"],a[data-concrete5-link-launch="lightbox"]').each(function(){var a=b(this),c=a.data("concrete5-link-type")||"ajax";a.magnificPopup({type:c,removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-in"}},closeOnContentClick:!0,midClick:!0})})}(this,$);