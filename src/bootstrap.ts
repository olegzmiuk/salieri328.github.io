import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import '@angular/platform-browser';
import 'rxjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main.module';

platformBrowserDynamic().bootstrapModule(MainModule);
