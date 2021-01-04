import React from 'react'
import PropTypes from 'prop-types'

export default function Input({ type, placeholder, value, onChange }) {
  const handleChange = ev => {
    if (typeof onChange === 'function') {
      onChange(ev)
    }
  }

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className="appearance-none rounded-none relative block w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      onChange={handleChange}
    />
  )
}

Input.propType = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  type: 'text'
}