import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
// Con bootstrap.bundle ya no se necesita importar pooper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Se debe inicializar los tooltip personalizados de bootstrap
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
