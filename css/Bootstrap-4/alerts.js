function hideAlert(id) {
    $(`#${id}`).addClass('d-none');
}

function showAlert(id) {
    $(`#${id}`).removeClass('d-none');
}

$(document).ready(function() {
    $('#my-alert').on('close.bs.alert', function() {
        alert('Alert is closing.');
    });

    $('#my-alert').on('closed.bs.alert', function() {
        alert('Alert is closed.');
    });
});