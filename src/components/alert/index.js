import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const theme = {
  danger: 'bg-red-50 text-red-400',
  success: 'bg-green-50 text-green-400'
}

export default function Alert({ variant, children }) {
  return (
    <div
      className={clsx("text-sm py-2 px-3 rounded-md", theme[variant])}
      children={children}
    />
  )
}

Alert.propType = {
  variant: PropTypes.oneOf(['danger', 'success']).isRequired,
  children: PropTypes.node
}