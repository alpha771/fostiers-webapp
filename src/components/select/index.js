import React from 'react'

export default function Select({ placeholder, options, onChange }) {
  const handleChange = ev => {
    if (typeof onChange === 'function') {
      onChange(ev.target.value)
    }
  }

  return (
    <select
      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      onChange={handleChange}
    >
      {placeholder && <option disabled selected>{placeholder}</option>}

      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}