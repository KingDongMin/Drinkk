import Swal from 'sweetalert2';

export default function useAlert() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const openAlert = (icon, title) => {
        Toast.fire({
            icon: icon,
            title: title,
        });
    };
    return { openAlert };
}
