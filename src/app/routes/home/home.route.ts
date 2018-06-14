import { Component } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
    selector: 'home-route',
    templateUrl: './home.route.html',
    styleUrls: ['./home.route.css']
})
export class HomeRoute {
    galleryOptions: NgxGalleryOptions[] = [
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
            height: '400px',
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
    galleryImages: NgxGalleryImage[] = [];
    designGalleryOptions: NgxGalleryOptions[] = [
        {
            previewSwipe: true,
            imageSwipe: true,
            width: '110%',
            height: '700px',
            thumbnails: false,
            imageAnimation: NgxGalleryAnimation.Fade,
            imageAutoPlayInterval: 5000,
            imageAutoPlay: true,
            imageArrows: false
        }
    ];
    designGalleryImages: NgxGalleryImage[] = [];
    cloudinaryRoot: string = "http://res.cloudinary.com/doboseecr/image/upload/v1505323891/";

    private logoGallery: Array<String> = [
        'design_zyq6u1',
        'Capture_o7oxuo',
        'Intel_o7g6at',
        'nato_gkwvfs',
        'ext_mhoc4e',
        'marjoni_logo_bkvlln'
    ];
    private designGallery: Array<String> = [
        'belgium_htmnse',
        '0_wwgpjm',
        'ext_3_gjaund',
        'ext_5_r322sj',
        'ext_2_q2aoar',
        'remember_g35rcw',
        'pamphlet_e1fqfp',
        'moon_jszsdb',
        'reedsx_k1htf5',
        'wi2_ij5gev',
        'NWbeauty3_ggfmkc',
        'man_nbmfuq',
        'cmack2_nikrbj'


    ];


    ngOnInit(): void {

        this.logoGallery.forEach(x => {
            this.galleryImages.push({
                small: this.cloudinaryRoot + x + '.jpg',
                medium: this.cloudinaryRoot + x + '.jpg',
                big: this.cloudinaryRoot + x + '.jpg'
            });
        });

        this.designGallery.forEach(x => {
            this.designGalleryImages.push({
                small: this.cloudinaryRoot + x + '.jpg',
                medium: this.cloudinaryRoot + x + '.jpg',
                big: this.cloudinaryRoot + x + '.jpg'
            });
        });
    }
}
