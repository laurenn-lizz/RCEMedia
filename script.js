import * as maptilersdk from '@maptiler/sdk';

maptilersdk.config.apiKey = 'wv8IGjM4JbBNl9OBfGqT';

const mapContainer = document.getElementById('map');

const map = new maptilersdk.Map({
  container: mapContainer,
});
