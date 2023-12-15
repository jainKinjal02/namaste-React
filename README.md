# Namaste React

# Parcel doing following things:
- Dev build
- Local Server
- HMR = Hot Module Replacement
- uses a file watching algorithm - written in C++ , as we do any change it tracks the change and builds at once and loads automatically on the server
- Caching - faster builds , its caching things in .parcel-cache folder
- Image optimization - most expensive thing is to load images in browser
- Minification of files for production build
- Bundling
- Compress files
- Consistent hashing
- Code splitting
- differential bundling (support older browser) different bundle which can work with older browser versions also
- diagnostics of the app
- Error handling better
-  HTTPS is also provided
-Tree shaking - remove unused code 
- Different dev and production bundles
