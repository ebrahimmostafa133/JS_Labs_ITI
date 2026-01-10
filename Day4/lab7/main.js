numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});