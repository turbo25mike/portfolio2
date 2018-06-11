import { Component } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation  } from 'ngx-gallery';

@Component({
    selector: 'home-route',
    templateUrl: './home.route.html',
    styleUrls: ['./home.route.css']
})
export class HomeRoute {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    cloudinaryRoot: string = "http://res.cloudinary.com/doboseecr/image/upload/";

    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                thumbnailsSwipe: true,
                previewSwipe: true,
                imageSwipe: true,
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                thumbnailsRemainingCount: true,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
 
        this.galleryImages = [
            {
                small: this.cloudinaryRoot + 'v1505323891/Capture_o7oxuo.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/Capture_o7oxuo.jpg',
                big: this.cloudinaryRoot + '/v1505323891/Capture_o7oxuo.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/Intel_o7g6at.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/Intel_o7g6at.jpg',
                big: this.cloudinaryRoot + '/v1505323891/Intel_o7g6at.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/nato_gkwvfs.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/nato_gkwvfs.jpg',
                big: this.cloudinaryRoot + '/v1505323891/nato_gkwvfs.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/nato_gkwvfs.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/nato_gkwvfs.jpg',
                big: this.cloudinaryRoot + '/v1505323891/nato_gkwvfs.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/ext_mhoc4e.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/ext_mhoc4e.jpg',
                big: this.cloudinaryRoot + '/v1505323891/ext_mhoc4e.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/0_wwgpjm.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/0_wwgpjm.jpg',
                big: this.cloudinaryRoot + '/v1505323891/0_wwgpjm.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/ext_4_cggxou.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/ext_4_cggxou.jpg',
                big: this.cloudinaryRoot + '/v1505323891/ext_4_cggxou.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/ext_3_gjaund.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/ext_3_gjaund.jpg',
                big: this.cloudinaryRoot + '/v1505323891/ext_3_gjaund.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/ext_5_r322sj.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/ext_5_r322sj.jpg',
                big: this.cloudinaryRoot + '/v1505323891/ext_5_r322sj.jpg'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/ext_2_q2aoar.jpg',
                medium: this.cloudinaryRoot + '/v1505323891/ext_2_q2aoar.jpg',
                big: this.cloudinaryRoot + '/v1505323891/ext_2_q2aoar.jpg'
            }
        ];
    }
}
