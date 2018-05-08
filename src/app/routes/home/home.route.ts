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
                small: this.cloudinaryRoot + 'v1505323891/icon_zp0s0k.png',
                medium: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                big: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                medium: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                big: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                medium: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                big: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                medium: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                big: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                medium: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                big: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png'
            },
            {
                small: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                medium: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png',
                big: this.cloudinaryRoot + '/v1505323891/icon_zp0s0k.png'
            }
        ];
    }
}
