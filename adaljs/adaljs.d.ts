// Type definitions for AdalJS v0.0.4 (Azure AD Authentication Library)
// Project: https://github.com/AzureAD/azure-activedirectory-library-for-js
// Definitions by: Ben Gale <https://github.com/bengale>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angularjs/angular-route.d.ts"/>

///////////////////////////////////////////////////////////////////////////////
// Azure AD Authentication Library (adal.js)
///////////////////////////////////////////////////////////////////////////////
declare module adal {
    
    interface IAdalAuthenticationServiceProvider {
        init(configOptions: IConfigOptions, httpProvider: ng.IHttpProvider): any;
    }

    interface IAdalAuthenticationService {
        config: IConfigOptions;
        login(): void;
        loginInProgress(): boolean;
        logOut(): void;

    }

    interface IConfigOptions {
        clientId: string;
        tenant?: string;
        endpoints?: {[apiUrl:string]: string };
        redirectionUri?: string;
        postLogoutRedirectUri?: string;
        displayCall?: Function;
        loginResource?: string;
        redirectUri?: string;
        resource?: string;
        expireOffsetSeconds?: number;
        instance?: string;
        cacheLocation?: string; // Set to "localStorage" or default to session
    }
}

///////////////////////////////////////////////////////////////////////////////
// Angular Azure AD Authentication Library (adal-angular.js)
///////////////////////////////////////////////////////////////////////////////
declare module adal {
    /**
     * This provides the exisiting route interface with the property to decide
     * whether it needs to be authenticated.
     */
    interface IAdalRoute extends ng.route.IRoute {
        requireAdLogin?: boolean
    }
    /**
     * This provides a method on the IRouteProvider interface to use our 
     * authenticated route.
     */
    interface IAdalRouteProvider extends ng.route.IRouteProvider {
        when(path: string, route: IAdalRoute): ng.route.IRouteProvider;
    }
}