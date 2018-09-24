import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';
import { MapMarkerService } from './map-marker.service';
import { TripListDialogComponent } from '../dialog/trip-list-dialog/trip-list-dialog.component';
import { TripChartsDialogComponent } from '../dialog/trip-charts-dialog/trip-charts-dialog.component';
import { AboutDialogComponent } from '../dialog/about-dialog/about-dialog.component';
import { IDestination, IMapDetails } from '../app.interfaces';
import 'hammerjs';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    public markers: Array<IDestination> = [];
    public orderedMarkers: Array<IDestination> = [];
    public mapDetails: IMapDetails = {
        latitude: 39.772771,
        longitude: -97.195243,
        zoom: 4
    };

    public stylesJson: any = this.lightTheme();
    public lightEnabled: boolean = false;

    constructor(public dialog: MatDialog, private database: AngularFireDatabase, private markerService: MapMarkerService) {}

    ngOnInit() {
        this.markerService.getMapMarkers().subscribe((dbMarkers: Array<IDestination>) => {
            this.markers = dbMarkers;
            const markersCopyString = JSON.stringify(dbMarkers);
            const markersCopyArray = JSON.parse(markersCopyString);
            this.orderedMarkers = markersCopyArray.sort((a, b) => (a.latitude < b.latitude ? 1 : b.latitude < a.latitude ? -1 : 0));
        });

        this.lightEnabled = true;

        if (window.innerWidth < 500) {
            this.mapDetails.zoom = 3;
        }
    }

    public openTripList() {
        this.dialog.open(TripListDialogComponent, {
            data: {
                trips: this.markers
            }
        });
    }

    public openTripChart() {
        this.dialog.open(TripChartsDialogComponent, {
            data: {
                trips: this.markers
            }
        });
    }

    public openAbout() {
        this.dialog.open(AboutDialogComponent, {
            data: {
                trips: this.markers
            }
        });
    }

    public toggleTheme(): void {
        this.lightEnabled = !this.lightEnabled;
        if (this.lightEnabled) {
            this.stylesJson = this.lightTheme();
        } else {
            this.stylesJson = this.darkTheme();
        }
    }

    private lightTheme(): Array<any> {
        return [
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#77CAE6'
                    }
                ]
            }
        ];
    }

    private darkTheme(): Array<any> {
        return [
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#8ec3b9'
                    }
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1a3646'
                    }
                ]
            },
            {
                featureType: 'administrative.country',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#4b6878'
                    }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#64779e'
                    }
                ]
            },
            {
                featureType: 'administrative.province',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#4b6878'
                    }
                ]
            },
            {
                featureType: 'landscape.man_made',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#334e87'
                    }
                ]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#023e58'
                    }
                ]
            },
            {
                featureType: 'landscape.natural.landcover',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        visibility: 'on'
                    }
                ]
            },
            {
                featureType: 'landscape.natural.terrain',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#176f9a'
                    },
                    {
                        visibility: 'on'
                    },
                    {
                        weight: 8
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#283d6a'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#6f9ba5'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#023e58'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#3C7680'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#304a7d'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#98a5be'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#2c6675'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#255763'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#b0d5ce'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#023e58'
                    }
                ]
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#98a5be'
                    }
                ]
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#283d6a'
                    }
                ]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#3a4762'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#0e1626'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#4e6d70'
                    }
                ]
            }
        ];
    }
}
