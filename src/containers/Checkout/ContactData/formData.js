const formData = {
  name: {
    label: 'Nombre completo',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Tu nombre y apellido...'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    style: {
      row: false,
      position: 'default'
    }
  },
  email: {
    label: 'Correo electrónico',
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Ej. hamburguesa@ejemplo.com'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    style: {
      row: false,
      position: 'default'
    }
  },
  address: {
    label: 'Dirección',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Ej. Calle San Martín 175'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    style: {
      row: false,
      position: 'default'
    }
  },
  zipCode: {
    label: 'Código postal',
    elementType: 'input',
    elementConfig: {
      type: 'number',
      placeholder: 'Ej. 1043'
    },
    value: '',
    validation: {
      required: true,
      minLength: 4,
      maxLength: 4
    },
    valid: false,
    touched: false,
    style: {
      row: true,
      position: 'left'
    }
  },
  deliveryMethod: {
    label: 'Tipo de envío',
    elementType: 'select',
    elementConfig: {
      options: [
        {value: 'fast', displayValue: 'Rápido'},
        {value: 'normal', displayValue: 'Normal'}
      ]
    },
    value: 'normal',
    validation: {},
    valid: true,
    style: {
      row: true,
      position: 'right'
    }
  },
  country: {
    label: 'País',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Ej. Argentina'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    style: {
      row: false,
      position: 'default'
    }
  }
}

export default formData