const input = document.getElementById('username');
        const label = document.querySelector('label[for="username"]');
        const submitBtn = document.getElementById('submitBtn');

        input.addEventListener('input', function() {
            if (this.value) {
                label.classList.add('filled');
            } else {
                label.classList.remove('filled');
            }
        });

        submitBtn.addEventListener('click', function() {
            if (input.value.trim() === '') {
                alert('please fill up the name');
            } else {
                localStorage.setItem('username', input.value.trim());
                window.location.href = 'website.html';
            }
        });