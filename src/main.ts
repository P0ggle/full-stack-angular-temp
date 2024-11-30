import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'add here',
      clientId: 'add here',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    provideHttpClient(),
    appConfig.providers,
  ],
}).catch((err) => console.error(err));
