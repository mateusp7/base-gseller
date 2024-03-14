import Swal from 'sweetalert2'

interface deletionAlertProps {
  title?: string
  text?: string
  mode?: string
}

export const deletionAlert = ({
  title = 'Tem certeza?',
  text = 'Essa ação não poderá ser revertida!',
  mode = 'light'
}: deletionAlertProps = {}) => {
  const result = Swal.fire({
    title,
    text,
    icon: 'warning',
    iconColor: '#CC5F5F',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true,
    background: mode === 'dark' ? '#121212' : '#FFFFFF',
    color: mode === 'light' ? '#121212' : '#FFFFFF',
    customClass: {
      actions: 'flex items-center gap-2',
      confirmButton:
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 ease-linear border-failure !bg-failure text-white shadow-[0_10px_20px_-10px] shadow-failure/60 hover:shadow-failure w-full !h-10 px-4 py-2 flex-1',
      cancelButton:
        'w-full items-center w-full border border-black-10 px-4 py-2 flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 ease-linear !h-10 hover:bg-white hover:text-black-80 '
    },
    buttonsStyling: false
  })

  return result
}
